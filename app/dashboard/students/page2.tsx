/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wv4fhJuj03O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select"

enum mode {
  create="create",
  fetch="fetch",
  upload="upload"
}

export default function Component() {
  const [departmentName, setDepartmentName] = useState("")
  const [academicYear, setAcademicYear] = useState(0)
  const [graduationType, setGraduationType] = useState("UG")
  const [year, setYear] = useState("FY")
  const [modes, setModes] = useState<mode>()
  const handleCreateData = () => {
    console.log("Creating data:", {
      departmentName,
      academicYear,
      graduationType,
      year,
    })
  }
  const handleFetchData = () => {
    console.log("Fetching data")
  }
  const handleUploadData = () => {
    console.log("Uploading data")
  }
  return (
    <div className="flex flex-col">
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-none border-none">
            <CardHeader className="flex justify-between flex-row">
              <CardTitle className="text-3xl">Add Student</CardTitle>
              <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={mode.create}>Create</SelectItem>
                    <SelectItem value={mode.fetch}>Fetch</SelectItem>
                    <SelectItem value={mode.upload}>Upload</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
                      <SelectItem value="2122">2023-24</SelectItem>
                      <SelectItem value="2223">2023-24</SelectItem>
                      <SelectItem value="2324">2023-24</SelectItem>
                      <SelectItem value="2425">2024-25</SelectItem>
                      <SelectItem value="2526">2025-26</SelectItem>
                      <SelectItem value="2627">2026-26</SelectItem>
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
                <div className="w=full">
                  <Button onClick={handleCreateData} className="w-full" >
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}