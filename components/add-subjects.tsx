import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

interface AddSubjectsProps {
  handleInputChange: (e:any)=>void
  handleAddSubject: (e:any)=>void
  handleRemoveClick: (index:number)=>void
  value:any
  subjects: any[]
}

const AddSubjects = ({
  handleInputChange,
  handleAddSubject,
  handleRemoveClick,
  value,
  subjects
}:AddSubjectsProps) => {
  return (
    <>
    <Label htmlFor="subjects">Subjects</Label>
    <div className="flex flex-wrap gap-2">
      <Input
        className="flex-1"
        placeholder='e.g. "Python"'
        onChange={handleInputChange}
        value={value}
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
    </>
  )
}

export default AddSubjects