"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Download, Plus, Upload } from "lucide-react"
import Header from "@/app/dashboard/_components/header"

export default function Component() {
  const [departmentName, setDepartmentName] = useState("")
  const [academicYear, setAcademicYear] = useState(0)
  const [graduationType, setGraduationType] = useState("UG")
  const [year, setYear] = useState("FY")
  const [showDialog, setShowDialog] = useState(false)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [rollNo, setRollNo] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [file, setFile] = useState(null)
  const handleCreateData = () => {
    setShowDialog(true)
  }
  const handleSaveData = () => {
    console.log("Saving student data:", {
      rollNo,
      name,
      email,
      password,
      mobileNo,
    })
    setShowDialog(false)
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
  return (
    <div className="">
      <Header title="Students"/>
      <div className="flex  flex-col">
        <main className="flex-1 p-4 md:p-6">
          <div className="">
            <Card className="border-none outline-none shadow-none">
              <CardHeader className="flex items-center flex-row justify-between">
                <CardTitle className="text-3xl">Add Student</CardTitle>
                <div className="flex justify-center items-center">
                  <Button className="mr-2" variant="outline"><Download className="w-4 h-4"/>Download Template</Button>
                </div>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departmentName">Department Name</Label>
                    <Select value={departmentName} onValueChange={setDepartmentName}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="academicYear">Academic Year</Label>
                    <Select
                      value={academicYear.toString()}
                      onValueChange={(value) => setAcademicYear(parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2324">2023-24</SelectItem>
                        <SelectItem value="2425">2024-25</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FY">FY</SelectItem>
                        <SelectItem value="SY">SY</SelectItem>
                        <SelectItem value="TY">TY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationType">Graduation Type</Label>
                    <Select value={graduationType} onValueChange={setGraduationType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select graduation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UG">UG</SelectItem>
                        <SelectItem value="PG">PG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
                  <div className="flex my-4">
                    <Button onClick={handleUploadData} variant="secondary" className="mr-1 w-full"><Upload className="w-4 h-4"/> Upload Bulk</Button>
                    <Button onClick={handleCreateData} variant="secondary" className="ml-1 w-full"><Plus className="w-4 h-4"/> Add Student</Button>
                  </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter the student's details to create a new record.</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="rollNo">Roll No.</Label>
                <Input
                  required
                  id="rollNo"
                  placeholder="Enter roll number"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rollNo">Department</Label>
                <Input
                  id="rollNo"
                  placeholder="Enter Department Name"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNo">Mobile No.</Label>
                <Input
                  id="mobileNo"
                  placeholder="Enter mobile number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSaveData}>Save</Button>
              <div>
                <Button variant="outline" onClick={()=>setShowDialog(!showDialog)}>Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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