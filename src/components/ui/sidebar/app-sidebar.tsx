"use client";

import * as React from "react";
import { Settings2, Home, FileIcon, Folder } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./user";
import { userStore } from "@/zustand/user.store";
import Title from "../title";

const data = {
  user: {
    name: userStore.getState().name,
    email: userStore.getState().email,
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Recent",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Archieved",
          url: "#",
        },
      ],
    },
    {
      title: "Files",
      url: "#",
      icon: FileIcon,
      items: [
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Files",
          url: "#",
        },
        {
          title: "Videos",
          url: "#",
        },
      ],
    },
    {
      title: "Folders",
      url: "#",
      icon: Folder,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Title
          className="text-xl font-bold leading-tight tracking-tighter"
          title="Quicksave"
        />
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
