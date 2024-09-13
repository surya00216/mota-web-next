import React, { Children } from 'react'
import { ModeToggle } from '@/components/darkModeToggle'
import HeaderDropdown from './header-dropdown'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
  children?: React.ReactNode
}

const Header = ({title, children}:HeaderProps) => {
  const route = useRouter()
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
          <div className="flex-1 items-center flex row">
            <Button className='mr-2 p-2' onClick={()=>route.back()} variant="outline"><ChevronLeft/></Button>
            <h1 className="font-semibold text-lg">{title?.length == 0 ? "Super Admin Dashboard" : title}</h1>
          </div>
          <div className="flex items-center gap-4">
            {children}
            <ModeToggle/>
            <HeaderDropdown/>
          </div>
        </header>
    </>
  )
}

export default Header