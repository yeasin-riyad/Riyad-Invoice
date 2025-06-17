'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowLeft, MailIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const VerifyEmail = () => {
    const router=useRouter()
  return (
    <Card className='w-full max-w-xs px-4  lg:min-w-sm'>
        <CardHeader className='flex flex-col items-center gap-3'>
            <div className='bg-yellow-100 text-primary p-4 rounded-full '>
                <MailIcon className='size-8 lg:size-12'/>
            </div>
            <CardTitle className='text-xl font-semibold'>
                Check Your Email
            </CardTitle>
            <CardDescription className='text-center'>
                We Have Send a Verification Link to Your Email address.
            </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-6'>
            <div className='flex items-center gap-x-2 p-4 bg-yellow-50 text-yellow-600 rounded-lg'>
                <AlertCircle className='size-5'/>
                <span>Check Your spam folder too</span>
            </div>
            <Button onClick={()=>router.back()}  className='w-full'>
                <ArrowLeft className='size-4'/>
                Back To Login
            </Button>
        </CardContent>
      
    </Card>
  )
}

export default VerifyEmail
