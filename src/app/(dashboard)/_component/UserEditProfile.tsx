'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { onboardingSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


interface UserEditProfile{
    firstName:string;
    lastName:string;
    email:string;
    currency:string
}
const UserEditProfile = ({firstName,lastName,email,currency}:UserEditProfile) => {
    const {register,handleSubmit,formState:{errors}}=useForm<z.infer<typeof onboardingSchema>>({
            resolver:zodResolver(onboardingSchema),
            defaultValues:{
                currency:"BDT"
            }
        })
    
        const [isLoading,setIsLoading]=useState<boolean>(false)
        const router=useRouter();
        const onSubmit=async (data:z.infer<typeof onboardingSchema>)=>{
            try{
                setIsLoading(true);
                const response= await fetch('/api/user',{
                    method:"put",
                    body:JSON.stringify(data)
                })
                const responseData= await response.json()
                if(response.status==200){
                    router.push("/dashboard")
                }
    
            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false)
            }
            
        }
  return (
    <form action="" className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label>First Name</Label>
              <Input disabled={isLoading}  placeholder="Joe" type="text" {...register("firstName",{required:true})} />
            </div>
            {
                errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName.message}</p>
                )
            }

            <div className="grid gap-2">
              <Label>Last Name</Label>
              <Input disabled={isLoading} placeholder="Due" type="text" {...register("lastName",{required:true})} />
            </div>
              {
                errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName.message}</p>
                )
            }

            <div className="grid gap-2">
              <Label>Select Currency</Label>
              <Select disabled={isLoading} defaultValue="BDT" {...register("currency")}>
                <SelectTrigger className=" w-full">
                  <SelectValue placeholder="BDT" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BDT">BDT</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={isLoading}>
                {isLoading ?"Please Wait....":"Finish Onboarding"}
            </Button>
          </form>
  )
}

export default UserEditProfile
