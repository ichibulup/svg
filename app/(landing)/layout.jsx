"use client"

import Link from "next/link"
import { Button } from "@gorth/primitive/default/button"

const navItems = [
  { title: "Logos", href: "/logos" },
  { title: "Collections", href: "/collections" },
  { title: "Products", href: "/products" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
]

export default function SharedLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-6">
          <Link href="/" className="text-sm font-semibold">
            JP
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
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
      </header>

      <main className="container mx-auto flex-1 p-6">{children}</main>

      <footer className="border-t bg-background/95">
        <div className="container mx-auto flex flex-wrap items-center gap-3 p-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}