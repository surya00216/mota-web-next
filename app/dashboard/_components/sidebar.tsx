'use client'

import React, { useState } from 'react'

import { GraduationCap, SettingsIcon,  UserIcon, UsersIcon } from "lucide-react"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const Sidebar = () => {
  enum SidebarName {
    STUDENTS = "Students",
    DEPARTMENT = "Departments",
    SETTINGS = "General Settings",
    ADMIN = "Admin"
  }
  const route = useRouter()
  
  const [header, setHeader] = useState<SidebarName>()
  
  const handleClick = (name:any) => {
    setHeader(name)
  }
  return (
    <div className='flex flex-col'>
      <nav className="grid items-start px-4 text-sm font-medium">
        <Button className="flex justify-start mb-2" onClick={()=>{
            handleClick(SidebarName.ADMIN)
            route.push("/")
          }} variant="ghost">
          <UserIcon className="h-4 w-4 mr-2"/>
          Admin
        </Button>
        <Button className="flex justify-start" onClick={()=>{
            handleClick(SidebarName.STUDENTS)
            route.push("/dashboard/students")
          }} variant="ghost">
          <UsersIcon className="h-4 w-4 mr-2"/>
          Students
        </Button>
        <Button className="flex justify-start" onClick={()=>{
            handleClick(SidebarName.DEPARTMENT)
            route.push("/dashboard/department")  
          }} variant="ghost">
          <GraduationCap className="h-4 w-4 mr-2"/>
          Department
        </Button>
        <Button className="flex justify-start" onClick={()=>handleClick(SidebarName.SETTINGS)} variant="ghost">
          <SettingsIcon className="h-4 w-4 mr-2"/>
          General Settings
        </Button>
      </nav>
    </div>
  )
}

export default Sidebar