import z from 'zod'

export const onboardingSchema= z.object({
    firstName:z.string().min(3,{message:"First Name Is Required"})
    .max(50,{message:"First Name Max 50 Character"}),
    lastName:z.string().min(3,{message:"Last Name Is Required"}).max(50,{message:"Last Name max 50 Character"}),
    currency:z.string({message:"Select Currency"}).optional()
})