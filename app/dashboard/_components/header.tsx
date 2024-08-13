import React from 'react'
import { ModeToggle } from '@/components/darkModeToggle'
import HeaderDropdown from './header-dropdown'

interface HeaderProps {
  title: string
}

const Header = ({title}:{title?:string}) => {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Super Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle/>
            <HeaderDropdown/>
          </div>
        </header>
    </>
  )
}

export default Header