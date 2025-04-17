import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { SonnerProvider } from "@/components/sonner-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Globus Beverages",
  description: "Premium tea and coffee import, export, and distribution services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

          {children}
          <SonnerProvider />
      </body>
    </html>
  )
}

