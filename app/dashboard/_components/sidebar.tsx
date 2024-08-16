'use client'

import { FlaskConical, GraduationCap, SettingsIcon, UserIcon, UsersIcon } from "lucide-react"
import SideButton from './sidebar-button'

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <nav className="grid items-start px-4 text-sm font-medium">
        <SideButton
          icon={UserIcon}
          label='Admin'
          path='/dashboard/admin'
        />
        <SideButton
          icon={UsersIcon}
          label='students'
          path='/dashboard/students'
        />
        <SideButton
          icon={GraduationCap}
          label='Department'
          path='/dashboard/department'
        />
        <SideButton
          icon={SettingsIcon}
          label='General Settings'
          path='/dashboard/settings'
        />
        <SideButton
          icon={FlaskConical}
          label='Test'
          path='/test'
        />
      </nav>
    </div>
  )
}

export default Sidebar