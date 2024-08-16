"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ChevronDownIcon, EyeIcon, FilePenIcon, TrashIcon } from "lucide-react"
import Header from "../_components/header"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Component() {
  const router = useRouter()

  const [department, setDepartment] = useState()
  const [year, setYear] = useState()
  const [academicYear, setAcademicYear] = useState()
  const [graudation, setGraduation] = useState()


  return (
    <div className="flex flex-col">
      <Header title="Students"/>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex p-4 flex-row justify-between items-center">
          <div className="font-bold text-3xl">Students</div>
          <div className="">
            <Button onClick={()=>{router.push("/dashboard/students/addstudents")}} variant="secondary">Add Students</Button>
          </div>
        </div>
        <div className="w-full" >
          <div className="flex justify-between items-center py-4 pr-4">
            <Input 
              placeholder="Filter emails..."
              className="max-w-sm"
            />
            <div className="flex flex-row">
              <div className="ml-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Year <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>2022-2023</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>2023-2024</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>2024-2025</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="ml-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Department <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>Computer Science</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Data Science</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>IT</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="ml-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Academic Year <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>First Year</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Second Year</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Third Year</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Fourth Year</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="ml-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Graduation <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>UG</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>PG</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardContent className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Modified</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>123-456-7890</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">********</span>
                      <Button variant="ghost" size="icon">
                        <EyeIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>Computer Science</TableCell>
                  <TableCell>2023-04-01 10:00 AM</TableCell>
                  <TableCell>2023-05-15 03:30 PM</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <FilePenIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

