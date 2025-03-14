"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className=" flex h-16 items-center px-4 justify-between w-full">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <Image
            height={10}
            width={10}
            src="/Logoblack.svg"
            alt="Globus Beverages Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold">Globus Beverages</span>
        </div>

        {/* Hamburger Menu completely on the right */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col space-y-6 pt-6">
              <div className="flex items-center space-x-2 pl-2">
                <Image
                  height={10}
                  width={10}
                  src="/Logoblack.svg"
                  alt="Globus Beverages Logo"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-lg font-bold">Globus Beverages</span>
              </div>

              <nav className="flex flex-col space-y-6 pl-4">
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                    Products
                  </h4>
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Sparkling Water
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Natural Juices
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Energy Drinks
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Specialty Teas
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                    Company
                  </h4>
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      About Us
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Sustainability
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Careers
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
