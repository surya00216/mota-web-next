"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const AddNewStudent = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [rollNo, setRollNo] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileNo, setMobileNo] = useState("")

  const formSchema = z.object({
    rollNo:z.string().min(1,{message:"Roll no. is required"}),
    department:z.string().min(1,{message:"Department is required"}),
    name:z.string().min(1,{message:"Name is required"}),
    password:z.string().min(1,{message:"Password is required"}),
    email:z.string().email().min(1,{message:"Email is required"}),
    mobileNo:z.number().min(10, {message:"Invalid number"})

  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rollNo: "",
      department: "",
      name: "",
      password: "",
      email: "",
      mobileNo: 0
    }
  })

  const {isValid, isSubmitting} = form.formState

  const handleCreateData = () => {
    setShowDialog(true)
    
  }
  const onSubmit = async(values:z.infer<typeof formSchema>) => {
    try {
      console.log(values)
    } catch (error) {
      
    }
    setShowDialog(false)
  }

  return (
    <div>
      <Button onClick={()=>setShowDialog(true)}>OPEN</Button>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter the student's details to create a new record.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form 
              className='grid grid-cols-2 gap-2'
              onSubmit={form.handleSubmit(onSubmit)}> 
                <FormField
                  control={form.control}
                  name="rollNo"
                  render={({field})=>(
                    <FormItem>
                      <FormLabel>Roll No.</FormLabel>
                      <FormControl>                        
                        <Input
                          disabled={isSubmitting}
                          placeholder="Enter roll number"
                          {...field}
                        />                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({field})=>(
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>                        
                        <Input
                          disabled={isSubmitting}
                          placeholder="Enter Name"
                          {...field}
                        />                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({field})=>(
                    <FormItem>
                      <FormLabel>Roll No.</FormLabel>
                      <FormControl>                        
                        <Input
                          type='email'
                          disabled={isSubmitting}
                          placeholder="Enter Email"
                          {...field}
                        />                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({field})=>(
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>                        
                        <Input
                          disabled={isSubmitting}
                          placeholder="Enter Password"
                          {...field}
                        />                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNo"
                  render={({field})=>(
                    <FormItem>
                      <FormLabel>Mobile No.</FormLabel>
                      <FormControl>                        
                        <Input
                          disabled={isSubmitting}
                          placeholder="Enter mobile number"
                          {...field}
                        />                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <Button type='submit'>Save</Button>
              </form>
            </Form>
            <DialogFooter>
              <div>
                <Button variant="outline" onClick={()=>setShowDialog(!showDialog)}>Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewStudent