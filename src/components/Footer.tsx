import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary sm:h-8 sm:w-8"></div>
              <h3 className="text-lg font-bold sm:text-xl">Globus Beverages</h3>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              Global tea and coffee sourcing, importing, exporting, and distribution services.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider sm:mb-4">Products</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-foreground">
                  Tea and Coffee Premix
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-foreground">
                  Vending Machines
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-foreground">
                  Drink Premixes
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-foreground">
                  Ready to Make Sachets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider sm:mb-4">Services</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Global Distribution
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider sm:mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li>Unique Plaza, B-Wing,</li>
              <li>Byculla, Mumbai 400011</li>
              <li><a href="mailto: globusbeverages@gmail.com">globusbeverages@gmail.com</a></li>
              <li> <a href="tel:+91 7304205800">+91 7304205800</a></li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              &copy; {new Date().getFullYear()} Globus Beverages. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground sm:justify-end">
              <Link href="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
