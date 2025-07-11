'use client'
import Logo from "@/components/Logo";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BookIcon, LayoutDashboardIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar({children}:{children:React.ReactNode}){
    const pathName=usePathname()
    return(
        <Sidebar>
            <SidebarHeader className="p-4">
                <Logo/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {/* Dashboard */}
                    <SidebarMenuItem className="p-2" >
                        <SidebarMenuButton asChild>
                        <Link href={"/dashboard"} className={cn(pathName==="/dashboard" && "bg-ring")}>
                        <LayoutDashboardIcon/>
                        <span>Dashboard</span>
                        </Link>

                        </SidebarMenuButton>
                       
                    </SidebarMenuItem>

                    {/* Invoice */}
                     <SidebarMenuItem className="px-2" >
                        <SidebarMenuButton asChild>
                        <Link href={"/invoice"} className={cn(pathName==="/invoice" && "bg-ring")}>
                        <BookIcon/>
                        <span>Invoice</span>
                        </Link>

                        </SidebarMenuButton>
                       
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>

            {/* Sidebar Footer */}
            <SidebarFooter>
                <SidebarMenu>
                         <SidebarMenuItem className="p-2" >
                        <SidebarMenuButton asChild>
                        <Link href={"/setting"} className={cn(pathName==="/setting" && "bg-ring")}>
                        <SettingsIcon/>
                        <span>Setting</span>
                        </Link>

                        </SidebarMenuButton>
                       
                    </SidebarMenuItem>
                </SidebarMenu>

                {children}
            </SidebarFooter>
        </Sidebar>
    )
}