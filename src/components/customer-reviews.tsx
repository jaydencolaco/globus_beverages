"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Café Owner",
    location: "Portland, USA",
    rating: 5,
    comment:
      "Working with Globus Beverages has transformed our café's offering. Their specialty coffee beans are consistently excellent, and their import process is seamless. Our customers have noticed the difference in quality!",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Michael Zhang",
    role: "Tea Retailer",
    location: "Toronto, Canada",
    rating: 5,
    comment:
      "As a specialty tea shop owner, I've worked with many suppliers, but Globus stands out for their exceptional selection and reliability. Their knowledge of tea varieties and origins is impressive, and they've helped us curate a unique collection for our customers.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Elena Petrova",
    role: "Distribution Manager",
    location: "Berlin, Germany",
    rating: 4,
    comment:
      "Globus Beverages has been our trusted partner for three years. Their logistics expertise and ability to navigate complex import regulations have made our expansion into new European markets much smoother than expected.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Hotel F&B Director",
    location: "Lagos, Nigeria",
    rating: 5,
    comment:
      "The quality and consistency of Globus products have elevated our hotel's beverage program. Their team provided excellent training for our staff, and guests frequently compliment our coffee and tea selection.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Aisha Al-Farsi",
    role: "Wholesale Buyer",
    location: "Dubai, UAE",
    rating: 5,
    comment:
      "Globus Beverages understands the unique preferences of the Middle Eastern market. Their custom blends have been extremely popular with our customers, and their delivery is always on time despite regional challenges.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    role: "Coffee Producer",
    location: "Medellín, Colombia",
    rating: 4,
    comment:
      "As a coffee producer, I appreciate Globus Beverages' commitment to fair pricing and sustainable practices. They've helped our cooperative reach new markets while maintaining our values and quality standards.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function CustomerReviews() {
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const displayedReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from businesses around the world who have partnered with Globus Beverages.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="border shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-muted-foreground">&quot;{review.comment}&quot;</blockquote>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.role}, {review.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <Button variant="outline" size="icon" onClick={prevPage} aria-label="Previous page">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={i === currentPage ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i)}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextPage} aria-label="Next page">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
