'use client'
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton({title}:{title:string}){
    const {pending}=useFormStatus();
    return(
        <Button className="w-full mt-4 lg:mt-5">
            {
                pending ?"Please Wait....":title
            }

        </Button>
    )
}