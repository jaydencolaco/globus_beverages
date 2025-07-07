"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary sm:h-8 sm:w-8"></div>
            <span className="hidden font-bold sm:inline-block lg:text-lg">Globus Beverages</span>
            <span className="font-bold sm:hidden">Globus</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex lg:space-x-8">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Home
          </Link>
          <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Products
          </Link>
          <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Services
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Gallery
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile search or other elements can go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Login
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 sm:max-w-xs">
                <div className="px-7">
                  <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary"></div>
                    <span className="font-bold">Globus Beverages</span>
                  </Link>
                </div>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/products"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      href="/services"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/gallery"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link
                      href="/about"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="mt-8 flex flex-col space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Button>
                    <Button className="w-full justify-start" onClick={() => setOpen(false)}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
