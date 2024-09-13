"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react"


export function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [hidden, setHidden] = useState(true)
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Remove this afterwards
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfull",{position:"top-center"})
      router.push('/dashboard/department')
    } catch (error:any) {
      setLoading(false)
      toast.error(`${error.message}`)
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSignIn}>      
        <Card className="w-96 shadow-lg ">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email to Login into MOTA Super Admin Panel
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" placeholder="johndoe@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex border rounded-md">
                <input onChange={(e)=>setPassword(e.target.value)} id="password" type={ hidden ? "password" : 'text'} className="flex h-9 w-full rounded-md  bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" required />
                <div className="mr-3 cursor-pointer flex justify-center items-center" onClick={()=>setHidden(!hidden)}>
                  {hidden ? <EyeOpenIcon className="w-4 h-4"/> : <EyeNoneIcon className="w-4 h-4"/>}
                </div>
              </div>
            </div>
          {error && <div className="text-red-500">Invalid email id or password</div> }
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <LoaderIcon className="h-4 w-4 animate-spin"/> : "Sign in"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}


export default LoginForm