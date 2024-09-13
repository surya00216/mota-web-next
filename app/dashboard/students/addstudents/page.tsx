"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Download, Plus, Upload } from "lucide-react"
import DropDown from "@/components/dropdown"
import Header from "@/components/header"
import InputBox from "@/components/input-box"
import AddStudentDialog from "@/components/add-student-dialog"
import { capitalizeStr, getAcademicYear, getCollection, getYear, saveStudent } from "@/lib/utils"
import toast from "react-hot-toast"

export default function Component() {
  const [departmentName, setDepartmentName] = useState<string[] | undefined>([])
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("")

  const [academicYear, setAcademicYear] = useState<string[] | undefined>([])
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("")

  const [graduationType, setGraduationType] = useState("UG")
 
  const [year, setYear] = useState<string[] | undefined>([])
  const [selectedYear, setSelectedYear] = useState("FY")

  const [rollNo, setRollNo] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [showStudentDialog, setShowStudentDialog] = useState(false)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleCreateData = () => {
    setShowStudentDialog(true)
  }
  const handleSaveData = async() => {
    setLoading(true)
    try {
      await saveStudent(selectedDepartmentName,email, parseInt(mobileNo), name, password, selectedAcademicYear, graduationType, selectedYear, rollNo.toUpperCase())
      toast.success("Student Added Successfully",{position:"top-center"})
      setLoading(false)
      setShowStudentDialog(false)
    } catch (error) {
      toast.error("Error while adding student", {position:"top-center"})
      setLoading(false)
      setShowStudentDialog(false)
    }
  }
  const handleUploadData = () => {
    setShowUploadDialog(true)
  }
  const handleFileChange = (e:any) => {
    setFile(e.target.files[0])
  }
  const handleUploadSubmit = () => {
    console.log("Uploading file:", file)
    setShowUploadDialog(false)
  }

  //useEffect(()=>{},[])

  useEffect(()=>{
    const fetchData = async() => {
      const res = await getCollection('departments') 
      const newArray = res?.map((data) => capitalizeStr(data.id))
      setDepartmentName(newArray) 
    }
    fetchData()
  },[])

  useEffect(()=>{
    const fetchData = async() => {
      if(selectedDepartmentName.length !== 0){
        const res = await getAcademicYear(selectedDepartmentName) 
        console.log(res)
        const newArray = res?.map((data) => data.id)
        setAcademicYear(newArray)
      }
    }
    fetchData()
  },[selectedDepartmentName])

  useEffect(()=>{
    const fetchData = async() => {
      if(selectedDepartmentName.length !== 0 && selectedAcademicYear.length !== 0 && graduationType.length !== 0){
        console.log(selectedDepartmentName, selectedAcademicYear, graduationType)
        const res = await getYear(selectedDepartmentName , selectedAcademicYear, graduationType) 
        const newArray = res?.map((data) => data.id)
        setYear(newArray)
      }
    }
    fetchData()
  },[selectedDepartmentName, selectedAcademicYear, graduationType])

  return (
    // form validation required
    <div className="">
      <Header title="Students"/>
      <div className="flex  flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="">
            <Card className="border-none outline-none shadow-none">
              <CardHeader className="flex items-center flex-row justify-between">
                <CardTitle className="text-3xl">Add Student</CardTitle>
                <div className="flex justify-center items-center">
                  <Button className="mr-2" variant="outline"><Download className="w-4 h-4 mr-2"/>Download Template</Button>
                </div>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                    <DropDown
                      label="Department Name"
                      value={selectedDepartmentName}
                      onValueChange={(value)=>{setSelectedDepartmentName(value)}}
                      option={departmentName!}
                      placeholder="Select Department"
                    />

                    <DropDown
                      label="Academic Year"
                      onValueChange={(value) => setSelectedAcademicYear(value)}
                      value={selectedAcademicYear}
                      option={academicYear!}
                      placeholder="Select academic year"
                    />

                    <DropDown
                      label="Graduation Type"
                      onValueChange={(value) => setGraduationType(value)}
                      placeholder="Select graduation type"
                      value={graduationType}
                      option={["UG","PG"]}
                    />

                    <DropDown
                      label="Year"
                      onValueChange={(value) => setSelectedYear(value)}
                      value={selectedYear}
                      placeholder="Select Year"
                      option={year!}
                    />

                </form>
                  <div className="flex my-4">
                    <Button onClick={handleUploadData} variant="secondary" className="mr-1 w-full"><Upload className="w-4 h-4"/> Upload Bulk</Button>
                    <Button onClick={handleCreateData} variant="secondary" className="ml-1 w-full"><Plus className="w-4 h-4"/> Add Student</Button>
                  </div>
              </CardContent>
            </Card>
          </div>
        </main>
        {/* validation required for add student dialog */}
        <AddStudentDialog
          open={showStudentDialog}
          onOpenChange={setShowStudentDialog}
          setRollNo={setRollNo}
          setSelectedDepartmentName={setSelectedDepartmentName}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setMobileNo={setMobileNo}
          handleClose={()=>setShowStudentDialog(false)}
          handleSaveData={handleSaveData}
          rollNo={rollNo}
          selectedDepartmentName={selectedDepartmentName}
          name={name}
          email={email}
          password={password}
          mobileNo={mobileNo}
          loading={loading}
        />

        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Student Data</DialogTitle>
              <DialogDescription>Upload an XLSX file containing student data.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="file">Upload File</Label>
                <Input id="file" type="file" accept=".xlsx" onChange={handleFileChange} />
              </div>
              <Button onClick={handleUploadSubmit}>Upload Student Data</Button>
            </div>
            <DialogFooter>
              <div>
                <Button variant="outline">Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}