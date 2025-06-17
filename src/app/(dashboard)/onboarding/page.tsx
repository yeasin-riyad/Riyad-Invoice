'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { onboardingSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const OnBoarding = () => {
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
    <div className="flex justify-center items-center flex-col min-h-dvh h-dvh overflow-auto relative p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#DC8C77,transparent)]"></div>
      </div>
      <Card className="min-w-xs lg:min-w-sm w-full max-w-sm">
        <CardHeader>
          <CardTitle>You Are Almost Finished</CardTitle>
          <CardDescription>
            Enter Your Information To Create An Account.
          </CardDescription>
        </CardHeader>

        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default OnBoarding;
