"use client"

import axios from "axios"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import toast from "react-hot-toast"
import InputBox from "./input-box"
import AddSubjects from "./add-subjects"
import { getCollection } from "@/lib/utils"

export default function AddDepartment() {
  const [departmentName, setDepartmentName] = useState<string>("")
  const [academicYear, setAcademicYear] = useState<number|string>()
  const [graduationType, setGraduationType] = useState("UG")
  const [year, setYear] = useState("FY")
  const [semester, setSemester] = useState<string[]>(["Semester 1", "Semester 2"])
  const [subjects, setSubjects] = useState<string[]>([])

  const [subject, setSubject] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const yearOption = (year:string) => {
    if(year==="FY"){
      setSemester(["Semester 1", "Semester 2"])
    }
    if(year==="SY"){
      setSemester(["Semester 3", "Semester 4"])
    }
    if(year==="TY"){
      setSemester(["Semester 5", "Semester 6"])
    }
    if(year==="FTY"){
      setSemester(["Semester 7", "Semester 8"])
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleAddSubject = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    if (subject.trim() !== '') {
      setSubjects((prevItems) => [...prevItems, subject]);
      setSubject('');
    };
    console.log(subjects)
  }
  
  const handleRemoveClick = (indexToRemove: number) => {
    setSubjects((prevItems:any) => prevItems.filter((_:any, index:number) => index !== indexToRemove));
  };

  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      // const response = await axios({
      //   method: 'post',
      //   url: '/user/12345',
      //   data: {
      //     departmentName,
      //     academicYear,
      //     graduationType,
      //     year,
      //     semester,
      //     subjects
      //   }
      // });
      const response = {
        departmentName,
        academicYear,
        graduationType,
        year,
        semester,
        subjects,
      }
      toast.success('Department added successfully');
      console.log(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(`${error}`)
    } finally {
      setIsLoading(false)
    }
  }



  return (
    <div>
      <div className="flex flex-col">
        <main className="flex-1 mt-6">
          <Card className="border-none outline-none shadow-none">
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <InputBox
                      label="Department Name"
                      placeholder="Computer Science"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputBox
                      label="Academic Year"
                      type="number" 
                      placeholder='e.g. 2324 for 2023-2024'
                      value={academicYear}
                      onChange={(e) => setAcademicYear(parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="graduationType">Graduation Type</Label>
                    <Select value={graduationType} onValueChange={(value)=>setGraduationType(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select graduation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UG">UG</SelectItem>
                        <SelectItem value="PG">PG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select value={year} onValueChange={(value)=>{
                      setYear(value);
                      yearOption(value)
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FY">FY</SelectItem>
                        <SelectItem value="SY">SY</SelectItem>
                        <SelectItem value="TY">TY</SelectItem>
                        <SelectItem value="FTY">FTY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semester.map((data,index)=>(
                        <SelectItem key={index} value={data}>{data}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <AddSubjects
                    handleAddSubject={handleAddSubject}
                    handleInputChange={handleInputChange}
                    handleRemoveClick={handleRemoveClick}
                    subjects={subjects}
                    value={subject}
                  />
                </div>
                <div className="flex justify-end">
                  <Button 
                    disabled={isLoading}
                    onClick={onSubmit} 
                    className="w-full" 
                    type="submit">Save</Button>
                </div> 
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}