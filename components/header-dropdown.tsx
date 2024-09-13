"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
import toast from "react-hot-toast"
import { log } from "util"
import { useAuth } from "@/app/providers/auth-provider"
import { useRouter } from "next/navigation"


const HeaderDropdown = () => {
  const router = useRouter()
  const user = useAuth()
  const email = user?.currentUser?.email
  const logOut = () => {
    signOut(auth).then(() => {
      toast.success(`Logged Out`)
      router.push("/login")
    }).catch((error) => {
      toast.error("Error while logging out, Please try again")
    });
  }

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{`${email ? email[0].toUpperCase() : "-" }`}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={logOut}
          >Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderDropdown