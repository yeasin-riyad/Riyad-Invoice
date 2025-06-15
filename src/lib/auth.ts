import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import client from "./db"
import Resend from "next-auth/providers/resend"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
  providers: [
    Resend({
      from:"Riyad-Invoice <onboarding@resend.dev>"
    })

  ],
})