"use client"

import React from "react"
import {
  SidebarProvider,
  SidebarInset,
} from "gorth-base-primitive/custom/sidebar"
import { Dashbar } from "@/layouts/dashbar"
import { Copyright } from "gorth-base-primitive/layouts/copyright"
import { AppSidebar } from "gorth-base-primitive/dashboard/app-sidebar"
import { dashboardSidebar } from "@/lib/constant";

export default function MainLayout({ children }) {
  const {
    authenticated,
    loading,
    logout,
    login,
    register
  } = {
    authenticated: true,
    loading: false,
    logout: async () => {},
    login: () => {},
    register: () => {}
  }

  return (
    <SidebarProvider>
      <AppSidebar
        auth={{
          authenticated,
          loading,
          logout,
          login,
          register
        }}
        data={{
          user: {
            name: "Japtor Gorthenburg",
            email: "japtor@gorth.com",
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