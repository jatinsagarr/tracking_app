import React from 'react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignIn = () => {
    return (
      // <div>
      //     <div className="w-full lg:w-[100%] p-8 md:p-14 flex items-center justify-center lg:justify-center">
      //         <div className="p-10 w-[600px]">
      //             <h1 className="text-6xl font-semibold">Login</h1>
      //             <p className="mt-6 ml-1">
      //                 Don&apos;t have an account ?{" "}
      //                 <Link href="/auth/sign-up">
      //                     <span className="underline hover:text-blue-400 cursor-pointer ">
      //                         Sign Up 
      //                     </span>
      //                 </Link>
      //             </p>
  
  
      //             <div className="mt-10 pl-1 flex flex-col">
      //                 <label>Email</label>
      //                 <input
      //                     // onChange={(e) => setEmail(e.target.value)}
      //                     // type="text"
      //                     placeholder='abcd1234@gmail.com'
      //                     className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
      //                 />
      //             </div>
      //             <div className="mt-10 pl-1 flex flex-col">
      //                 <label>Password</label>
      //                 <input
      //                     // onChange={(e) => setPassword(e.target.value)}
      //                     // type="password"
      //                     placeholder='enter strong password'
      //                     className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
      //                 />
      //             </div>
      //             <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
      //                 // onClick={() => onSignIn()}
      //             >
      //                 Login
      //             </button>
  
      //         </div>
      //     </div>
      // </div>
  
  
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to Sign Up the account   
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              
            </div>
            <div className="mt-4 text-center text-sm">
              Already have account?{" "}
              <Link href="/auth/sign-in" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/cagin-kargi-Qzp60FT380E-unsplash.jpg"
            alt="Image"
            width="520"
            height="120"
            className="h-50% w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
  
  
    )
  }
  
  export default SignIn
    