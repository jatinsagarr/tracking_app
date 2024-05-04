"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect } from 'react'


const SignIn = () => {
  const [data,setData] = useState({email :"",password :""});
  const router = useRouter();
  useEffect(()=>{
   let email = localStorage.getItem("email");
   if(email != null) router.push("/dashboard")
  },[]);
  const handleOnSubmit = async (e) => {
     if(!data.email.length || !data.password.length){
       alert("Please Fill Requered Details");
       return;
     }

     try {
         let res = await axios.post("http://localhost:8000/api/auth",{
           email : data.email,
           password : data.password
         });
        console.log(res.data);
        if(res.data.code != 200) throw res.data.message;
        localStorage.setItem("email",data.email);
        router.replace("/dashboard");
     } catch (error) {
         alert(error);
     }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value = {data.email}
                onChange={(e) => {
                  let inputValue = e.currentTarget.value;
                  setData({...data,email : inputValue});
                }}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required  value = {data.password}
                onChange={(e) => {
                  let inputValue = e.currentTarget.value;
                  setData({...data,password : inputValue});
                }}/>
            </div>
            <Button type="submit" className="w-full" onClick={handleOnSubmit}>
              Login
            </Button>
            
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="underline">
              Sign up
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




