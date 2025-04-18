import Link from "next/link";
import {
  Building2,
  Facebook,
  House,
  Instagram,
  Linkedin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Refreshing the world with premium quality beverages since 2015.
            </p>
          </div>
          {/* <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sparkling Water
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Natural Juices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Energy Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Specialty Teas
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Building2 /> Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <House /> Address
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Shop No. 3 Jenabai Valse Patel,
              </li>
              <li className="text-muted-foreground">
                2nd Cross Lane, Opp. Raj Masala
              </li>
              <li className="text-muted-foreground">
                Off N.M. Joshi Marg, Byculla
              </li>
              <li className="text-muted-foreground">Mumbai - 400027</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Phone /> Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <a href="tel:+919819991841">
                <li className="text-muted-foreground">+919819991841</li>
              </a>
              <a href="email:globusbeverages@gmail.com">
                <li className="text-muted-foreground">
                  globusbeverages@gmail.com
                </li>
              </a>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Globus Beverages. All rights
              reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
