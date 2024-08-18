import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

interface InputBoxProps {
  label: string
  placeholder?:string
  value?: string | number | undefined
  onChange?: (e:any)=>void
  type?:string
}

const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  type
}:InputBoxProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type || "text" }
      />
    </div>
  )
}

export default InputBox