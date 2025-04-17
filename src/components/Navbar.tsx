"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <span className="text-lg font-bold">Globus Beverages</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-10 hidden space-x-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary">
            Products
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary">
            Gallery
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="hidden md:inline-flex">Get Started</Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary"></div>
                  <span className="text-lg font-bold">Globus Beverages</span>
                </div>

                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex flex-col space-y-3 pt-4">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Login
                  </Button>
                  <Button onClick={() => setOpen(false)}>Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

