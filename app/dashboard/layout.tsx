"use client"
import Link from "next/link"
import Header from "./_components/header"
import Sidebar from "./_components/sidebar"
import { Mountain } from "lucide-react"

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[240px_1fr]">
      <div className="flex flex-col border-r bg-muted/40">
        <div className="flex h-[60px] items-center px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Mountain className="h-6 w-6" />
            <span>MOTA</span>
          </Link>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex-1 ">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout