import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Dashbar as Container } from "gorth-base-primitive/layouts/dashbar"
import { Separator } from "gorth-base-primitive/default/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "gorth-base-primitive/default/tooltip"
import { SidebarTrigger } from "gorth-base-primitive/custom/sidebar"
import { ModeSwitcher } from "gorth-base-primitive/element/mode-toggle"
import { Command } from "gorth-base-primitive/cores/lucide"

export function Dashbar() {
  return (
    <Container
      childrenLeft={
        <>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger className="size-9 rounded-md" />
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Sidebar</p>
            </TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          {/*<div className="mr-4 flex items-center">*/}
          {/*  <Link href="/" className="flex items-center space-x-2">*/}
          {/*    <Image*/}
          {/*      className="w-9 h-9"*/}
          {/*      src="/logo/icon.png"*/}
          {/*      alt={""}*/}
          {/*      width={36}*/}
          {/*      height={36}*/}
          {/*    />*/}
          {/*    <span className="text-lg font-bold hidden md:inline-block">{"Japtor"}</span>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </>
      }
      childrenRight={
        <>
          <ModeSwitcher/>
        </>
      }
    />
  )
}