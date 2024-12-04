import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/Inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/Calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/Search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/Settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible={"icon"} side={"left"} variant={"floating"}>
      <SidebarContent className="bg-primary text-primary-foreground rounded-lg">
        <SidebarGroup className="">
          <SidebarGroupLabel className="text-primary-foreground">
            Ahmad Raza
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
