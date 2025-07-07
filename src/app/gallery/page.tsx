"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Corporate Conference Coffee Bar",
    category: "corporate",
    description: "Premium coffee service for a 3-day technology conference with over 500 attendees.",
    image: "/placeholder.svg?height=600&width=800&text=Conference",
    date: "June 2023",
  },
  {
    id: 2,
    title: "Garden Wedding Tea Service",
    category: "wedding",
    description: "Elegant tea and coffee station for an outdoor wedding with 150 guests.",
    image: "/placeholder.svg?height=600&width=800&text=Wedding",
    date: "May 2023",
  },
  {
    id: 3,
    title: "Trade Show Espresso Bar",
    category: "exhibition",
    description: "High-volume espresso service for a busy trade show booth attracting hundreds of visitors daily.",
    image: "/placeholder.svg?height=600&width=800&text=Trade+Show",
    date: "April 2023",
  },
  {
    id: 4,
    title: "Medical Conference Refreshments",
    category: "seminar",
    description: "All-day beverage service for a medical conference with specialized tea and coffee options.",
    image: "/placeholder.svg?height=600&width=800&text=Medical+Conference",
    date: "March 2023",
  },
  {
    id: 5,
    title: "Product Launch Event",
    category: "corporate",
    description: "Custom-branded coffee service for a high-profile product launch event.",
    image: "/placeholder.svg?height=600&width=800&text=Product+Launch",
    date: "February 2023",
  },
  {
    id: 6,
    title: "Charity Gala Dessert & Coffee",
    category: "other",
    description: "Specialty coffee paired with desserts for an evening charity fundraiser.",
    image: "/placeholder.svg?height=600&width=800&text=Charity+Gala",
    date: "January 2023",
  },
  {
    id: 7,
    title: "University Graduation Ceremony",
    category: "other",
    description: "Large-scale coffee and tea service for a university graduation reception.",
    image: "/placeholder.svg?height=600&width=800&text=Graduation",
    date: "December 2022",
  },
  {
    id: 8,
    title: "Destination Wedding in Bali",
    category: "wedding",
    description: "Exotic coffee and tea bar featuring local Indonesian specialties for a destination wedding.",
    image: "/placeholder.svg?height=600&width=800&text=Bali+Wedding",
    date: "November 2022",
  },
  {
    id: 9,
    title: "Tech Startup Office Setup",
    category: "corporate",
    description: "Long-term coffee machine installation and supply for a growing tech company.",
    image: "/placeholder.svg?height=600&width=800&text=Office+Setup",
    date: "October 2022",
  },
  {
    id: 10,
    title: "Food & Beverage Expo Booth",
    category: "exhibition",
    description: "Interactive coffee tasting booth at a major food and beverage industry exhibition.",
    image: "/placeholder.svg?height=600&width=800&text=F%26B+Expo",
    date: "September 2022",
  },
  {
    id: 11,
    title: "Healthcare Conference",
    category: "seminar",
    description: "Multi-day beverage service for healthcare professionals with specialty options.",
    image: "/placeholder.svg?height=600&width=800&text=Healthcare+Conference",
    date: "August 2022",
  },
  {
    id: 12,
    title: "Summer Festival Tea Garden",
    category: "other",
    description: "Outdoor iced tea and cold brew coffee station for a summer arts festival.",
    image: "/placeholder.svg?height=600&width=800&text=Summer+Festival",
    date: "July 2022",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryItems)[0]>(null)

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const handleRequestInfo = (event: React.MouseEvent, item: (typeof galleryItems)[0]) => {
    event.stopPropagation()
    toast.success("Request sent", {
      description: `We'll send you more information about our services for ${item.title.toLowerCase()}.`,
      duration: 5000,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=500&width=1920&text=Event+Gallery"
              alt="Event gallery collage"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">Event Gallery</h1>
              <p className="mb-8 text-lg md:text-xl">
                Browse our portfolio of beverage services at various events, from elegant weddings to corporate
                functions.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-12">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="wedding">Weddings</TabsTrigger>
                  <TabsTrigger value="corporate">Corporate</TabsTrigger>
                  <TabsTrigger value="exhibition">Exhibitions</TabsTrigger>
                  <TabsTrigger value="seminar">Seminars</TabsTrigger>
                  <TabsTrigger value="other">Other Events</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                    onClick={() => openLightbox(item)}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{item.date}</p>
                      <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {["wedding", "corporate", "exhibition", "seminar", "other"].map((category) => (
                <TabsContent key={category} value={category} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {galleryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="group cursor-pointer overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                        onClick={() => openLightbox(item)}
                      >
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                          <p className="mb-2 text-sm text-muted-foreground">{item.date}</p>
                          <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Services CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Interested in Our Services?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We provide comprehensive beverage solutions for events of all sizes. From equipment rental to
                full-service setups, we&apos;ve got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/services">View Our Services</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Request a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative mx-4 max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative h-[50vh] w-full sm:h-[60vh] md:h-[70vh]">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{selectedImage.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{selectedImage.date}</p>
              <p className="mb-6 text-muted-foreground">{selectedImage.description}</p>
              <Button onClick={(e) => handleRequestInfo(e, selectedImage)}>Request Similar Service</Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
