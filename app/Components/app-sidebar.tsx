"use client";
import {
  User,
  Folder,
  BriefcaseBusiness,
  Contact,
  GraduationCap,
  SquareCode,
} from "lucide-react";

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
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "About",
    url: "/",
    icon: User,
  },
  {
    title: "Experience",
    url: "/Experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    url: "/Projects",
    icon: Folder,
  },
  {
    title: "Skills",
    url: "/Skills",
    icon: SquareCode,
  },
  {
    title: "Education",
    url: "/Education",
    icon: GraduationCap,
  },
  {
    title: "Contact",
    url: "/Contact",
    icon: Contact,
  },
];

export function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar collapsible={"icon"} side={"left"} variant={"floating"}>
      <SidebarContent className="bg-primary text-primary-foreground rounded-lg border-none">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary-foreground text-lg mt-2 mb-2">
            Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathName === item.url?true:false}
                    className="w-full"
                  >
                    <Link href={item.url}>
                      <div className="text-md me-1">
                        <item.icon />
                      </div>
                      <span className="text-xl">{item.title}</span>
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
