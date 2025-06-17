import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import userModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest) {
    try{
        const {firstName,lastName,currency}=await request.json();

        const session=   await auth();
        if(!session?.user){
           return NextResponse.json(
                {
                    message:"Unauthorized Access"
                },
                {
                    status:401
                }
            )

        }

        // Function Connect to DB
        await connectDB()
      

        const userDetails = await userModel.findByIdAndUpdate(session?.user?.id,{
            firstName,
            lastName,
            currency
        })

        return NextResponse.json({
            message:"User Created Successfully."
        })

    }catch(error:any){
        NextResponse.json({
            message:error || error.message || "something went wrong"
        },
    {
        status:500
    })
    }
    
}