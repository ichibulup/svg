"use client"

import React from "react"
import {
  SidebarProvider,
  SidebarInset,
} from "gorth-ui/custom/sidebar"
import { Dashbar } from "@/layouts/dashbar"
import { Copyright } from "gorth-ui/layouts/copyright"
import { AppSidebar } from "gorth-ui/dashboard/app-sidebar"
import { dashboardSidebar } from "@/lib/constant";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar
        data={{
          user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/square-bill.jpg",
          },
          ...dashboardSidebar
        }}
      />

      <SidebarInset>
        <Dashbar/>
        {children}
        <Copyright />
      </SidebarInset>
    </SidebarProvider>
  )
}