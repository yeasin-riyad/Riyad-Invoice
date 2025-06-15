import SubmitButton from "@/components/SubmitButton"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/auth"
export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm  ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      
      </CardHeader>
      <CardContent>
        <form
         action={async (formData) => {
        "use server"
        await signIn("resend", formData)
      }}
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
           
          </div>
        
        <SubmitButton title="Login"/>
       
        </form>
      </CardContent>
     
    </Card>
  )
}
