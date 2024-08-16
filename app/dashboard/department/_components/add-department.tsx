"use client"

import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import Header from "@/app/dashboard/_components/header"

export default function AddDepartment() {
  const [departmentName, setDepartmentName] = useState("")
  const [academicYear, setAcademicYear] = useState<number| string>()
  const [graduationType, setGraduationType] = useState("UG")
  const [year, setYear] = useState("FY")
  const [semester, setSemester] = useState(1)
  const [subjects, setSubjects] = useState<string[]>([])
  const [subject, setSubject] = useState("")

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


  return (
    <div>
      <div className="flex flex-col">
        <main className="flex-1 mt-6">
          <Card className="border-none outline-none shadow-none">
            {/* <CardHeader>
              <CardTitle className="text-2xl">Add Department</CardTitle>
            </CardHeader> */}
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departmentName">Department Name</Label>
                    <Input
                      id="departmentName"
                      placeholder="Computer Science"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="academicYear">Academic Year</Label>
                    <Input
                      id="academicYear"
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
                        <SelectItem value="FTY">FTY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select
                    value={semester.toString()}
                    onValueChange={(value) => setSemester(parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 8 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}`}>
                          Semester {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subjects">Subjects</Label>
                  <div className="flex flex-wrap gap-2">
                    <Input
                      className="flex-1"
                      placeholder='e.g. "Python"'
                      onChange={handleInputChange}
                      value={subject}
                    />
                    <Button onClick={handleAddSubject} className="w-18">Add</Button>
                  </div>
                  <div className="">
                    {subjects.map((subject, index)=>(
                      <Badge className="p-2 my-1 mr-2">
                        {subject}     
                        <X onClick={()=>handleRemoveClick(index)} className="w-4 h-4 ml-2 hover:text-slate-900 text-slate-500"/>
                      </Badge>
                    ))}
                  </div>
                  
                </div>
                <div className="flex justify-end">
                  <Button className="w-full" type="submit">Save</Button>
                </div> 
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}