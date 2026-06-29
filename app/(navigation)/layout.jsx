"use client"

import Link from "next/link"
import { Footer } from "gorth-base-primitive/layouts/footer"
import { Navbar } from "gorth-base-primitive/layouts/navbar"
import { Button } from "gorth-base-primitive/default/button"

const navItems = [
  { title: "Logos", href: "/logos" },
  { title: "Collections", href: "/collections" },
  { title: "Products", href: "/products" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
]

export default function SharedLayout({ children }) {
  return (
    <>
      <Navbar>
        <div className="flex w-full items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
            JP
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <Button asChild size="sm">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </Navbar>
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div className="container mx-auto p-6">{children}</div>
        </div>
      </main>
      <Footer>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </div>
      </Footer>
    </>
  )
}