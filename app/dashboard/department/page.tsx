"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Component from './_components/add-department'
import Header from '../_components/header'
import AddDepartment from './_components/add-department'
import ViewDepartment from './_components/view-department'

const page = () => {
  const [option, setOption] = useState<string>("add")
  return (
    <div>
      <Header title="Departments"/>
      <div className='p-6'>
        <div>
          <Tabs defaultValue="add" >
            <div className="flex border-b items-center pb-4 px-2 justify-between">
              <div className="">
                <h1 className="font-bold text-3xl">Department</h1>
              </div>
              <TabsList>
                <TabsTrigger value="add">Add</TabsTrigger>
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="add">
              <AddDepartment/>
            </TabsContent>
            <TabsContent value="view">
              <ViewDepartment/>
            </TabsContent>
            <TabsContent value="edit">
              Edit
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default page