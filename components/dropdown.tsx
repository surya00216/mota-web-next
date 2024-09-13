import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import React from 'react'

interface DropdownProps {
  label: string
  value: any
  onValueChange: (value:any)=>void 
  placeholder: string
  option: any[]
  disabled?: boolean
}

const DropDown = ({
  disabled,
  label,
  value,
  onValueChange,
  placeholder,
  option,
}:DropdownProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor="semester">{label}</Label>
      <Select
        disabled={disabled}
        value={value.toString()}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
          {option.map((data,index)=>(
            <SelectItem key={index} value={data}>
              {data}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DropDown