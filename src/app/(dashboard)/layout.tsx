import { ProtectedPage } from "@/components/CheckAuth";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./_component/DashboardSidebar";
import UserProfileDropdown from "./_component/UserProfileDropdown";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return (
       

        <ProtectedPage>
             <SidebarProvider>
            {/* Sidebar */}
            <DashboardSidebar>
                <UserProfileDropdown/>
                </DashboardSidebar>
             <main>
          
            {children}
        </main>

    </SidebarProvider>

        </ProtectedPage>

       
    )
}