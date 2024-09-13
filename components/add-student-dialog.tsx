import React, { Dispatch, SetStateAction } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import InputBox from "@/components/input-box"
import Loader from './loader'
import { LoaderIcon } from 'lucide-react'

interface AddStudentDialogProps {
  open: boolean
  rollNo:string
  selectedDepartmentName:string
  name:string
  email:string
  password:string
  mobileNo:string
  setRollNo:(value: SetStateAction<string>) => void
  setSelectedDepartmentName:(value: SetStateAction<string>) => void
  setName:(value: SetStateAction<string>) => void
  setEmail:(value: SetStateAction<string>) => void
  setPassword:(value: SetStateAction<string>) => void
  setMobileNo:(value: SetStateAction<string>) => void
  onOpenChange: Dispatch<SetStateAction<boolean>>
  handleClose: ()=>void
  handleSaveData: ()=>void
  loading:boolean
}

const AddStudentDialog = ({
  open,
  onOpenChange,
  handleClose,
  handleSaveData,
  setRollNo,
  setSelectedDepartmentName,
  setName,
  setEmail,
  setPassword,
  setMobileNo,
  rollNo,
  selectedDepartmentName,
  name,
  email,
  password,
  mobileNo,
  loading
}:AddStudentDialogProps) => {
  return (
    // form validation is required
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter the student's details to create a new record.</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              
                <InputBox
                  label="Roll No"
                  placeholder="Enter roll number"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              
              
                <InputBox
                  label="Department"
                  placeholder="Enter Department Name"
                  value={selectedDepartmentName}
                  onChange={(e) => setSelectedDepartmentName(e.target.value)}
                />
              
                <InputBox 
                  label="Name" 
                  placeholder="Enter name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} />
              
                <InputBox
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
                <InputBox
                  label="Password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              
              
                <InputBox
                  label="Mobile No."
                  placeholder="Enter mobile number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              
            </div>
            <DialogFooter>
              <Button disabled={loading} onClick={handleSaveData}>
                {loading ? <LoaderIcon className="h-4 w-4 animate-spin"/> : "Save"}
              </Button>
              <div>
                <Button variant="outline" onClick={handleClose}>Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddStudentDialog