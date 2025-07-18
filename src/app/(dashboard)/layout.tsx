import { ProtectedPage } from "@/components/CheckAuth";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./_component/DashboardSidebar";
import UserProfileDropdown from "./_component/UserProfileDropdown";
import DashboardHeader from "./_component/DashboardHeader";
import { Suspense } from "react";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return (
       

        <ProtectedPage>
             <SidebarProvider>
            {/* Sidebar */}
            <DashboardSidebar>
                <UserProfileDropdown isFullName={true} isArrowUp={true}/>
                </DashboardSidebar>
             <main className="w-full relative">
                <DashboardHeader/>
                <Suspense fallback={<p>loading....</p>}>
                         {children}
                </Suspense>
          
           
        </main>

    </SidebarProvider>

        </ProtectedPage>

       
    )
}