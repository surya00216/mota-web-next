import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface SideButtonProps {
  icon : LucideIcon
  label : string
  path: string
}

const SideButton = ({
  icon:Icon,
  label,
  path
}:SideButtonProps) => {
  const router = useRouter()
  // const [isSelected, setIsSelected] = useState<boolean>()
  return (
    <div>
      <Button className="flex justify-start w-full mb-2" onClick={()=>{
            // setIsSelected(!isSelected)
            router.push(path)
          }} variant={"ghost"}>
          <Icon className="h-4 w-4 mr-2"/>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </Button>
    </div>
  )
}

export default SideButton