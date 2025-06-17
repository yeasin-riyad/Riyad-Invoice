import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth, { DefaultSession } from "next-auth"
import client from "./db"
import Resend from "next-auth/providers/resend"

declare module "next-auth"{
  interface Session{
    user:{
      firstName:string,
      lastName:string,
      currency:string;
    }& DefaultSession['user']
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
  providers: [
    Resend({
      from:"Riyad-Invoice <onboarding@resend.dev>"
    })

  ],
  pages:{
    error:"/login",
    verifyRequest:"/verify-email",
    signIn:"/login",
  }
})