import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"


// Component for Protected Page
export async function ProtectedPage({children}:{children:React.ReactNode}) {
    const session =await auth()
    if(!session){
      return  redirect("/login")
    }

    return children;
    
}



// Component for Unprotected Page
export async function UnprotectedPage({children}:{children:React.ReactNode}) {
    const session =await auth()
    if(session){
        if(!session.user.firstName || !session.user.lastName || !session.user.currency){
          return  redirect("/onboarding");

        }else{
           return  redirect("/dashboard");

        }
        
    }

    return children;
    
}
