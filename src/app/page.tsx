import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Ship, TrendingUp, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Tea plantation landscape"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Premium Tea & Coffee <br className="hidden sm:block" />
                <span className="text-primary">From Source to Cup</span>
              </h1>
              <p className="mb-6 text-base sm:mb-8 text-black sm:text-lg md:text-xl">
                Global sourcing, importing, exporting, and distribution of the finest tea and coffee products from
                around the world.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" className="w-full font-medium sm:w-auto">
                  Explore Our Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-background/20 font-medium text-black backdrop-blur-sm sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/50 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                Global Tea & Coffee Specialists
              </h2>
              <p className="mb-8 text-base text-muted-foreground sm:mb-10 sm:text-lg">
                With over 25 years of experience, we connect premium producers with markets worldwide through our
                extensive distribution network.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="border-none bg-background shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <Ship className="mb-3 h-8 w-8 text-primary sm:mb-4 sm:h-10 sm:w-10" />
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">Import & Export</h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Seamless international trade operations with expertise in regulations, logistics, and customs
                    clearance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-background shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <Truck className="mb-3 h-8 w-8 text-primary sm:mb-4 sm:h-10 sm:w-10" />
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">Distribution</h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Efficient distribution channels ensuring your products reach markets quickly and in perfect
                    condition.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-background shadow-md sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6">
                  <TrendingUp className="mb-3 h-8 w-8 text-primary sm:mb-4 sm:h-10 sm:w-10" />
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">Market Growth</h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Strategic partnerships and market insights to help your tea and coffee business expand globally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Highlight Section */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="order-2 lg:order-1">
                <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Event Services & Gallery</h2>
                <p className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-lg">
                  We provide premium beverage services for events of all types and sizes. From elegant weddings to
                  corporate exhibitions, our team delivers exceptional tea and coffee experiences.
                </p>
                <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Tea and coffee machine rentals for events of any duration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Premium beverage premixes for consistent quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Both premix and fresh milk coffee options available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Professional service for weddings, seminars, and exhibitions
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/services">View Our Services</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                    <Link href="/gallery">Browse Event Gallery</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Wedding"
                        alt="Wedding coffee service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Exhibition"
                        alt="Exhibition coffee booth"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative -top-4 space-y-3 sm:-top-8 sm:space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Corporate"
                        alt="Corporate event service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Seminar"
                        alt="Seminar coffee break"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Our Premium Selection</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                We source the finest teas and coffees from renowned growing regions across the globe.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {[
                {
                  title: "Specialty Coffee",
                  description: "Single-origin and artisanal blends from top coffee-producing regions.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  title: "Premium Tea",
                  description: "Exquisite loose leaf teas including black, green, oolong, and white varieties.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  title: "Herbal Infusions",
                  description: "Caffeine-free blends crafted from herbs, fruits, and botanicals.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  title: "Organic Selection",
                  description: "Certified organic products meeting the highest quality standards.",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden sm:h-64">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="mb-2 text-lg font-bold sm:text-xl">{product.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground sm:mb-4 sm:text-base">{product.description}</p>
                    <Link
                      href="/products"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center sm:mt-8">
              <Button asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Comprehensive Services</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                End-to-end solutions for tea and coffee businesses worldwide.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">For Producers & Exporters</h3>
                  <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
                    {[
                      "Access to global markets and distribution channels",
                      "Logistics and shipping management",
                      "Regulatory compliance and documentation",
                      "Market intelligence and pricing strategies",
                      "Quality control and certification assistance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto">Partner With Us</Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">For Retailers & Distributors</h3>
                  <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
                    {[
                      "Diverse portfolio of premium tea and coffee products",
                      "Flexible order quantities and customization options",
                      "Reliable supply chain and consistent quality",
                      "Private labeling and packaging solutions",
                      "Marketing support and product education",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto">Source Products</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Our Global Reach</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Operating across continents to connect producers with markets worldwide.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative h-64 overflow-hidden rounded-lg border shadow-sm sm:h-80 lg:h-96">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="World map showing our global operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">Connecting Global Markets</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-primary sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Sourcing Regions</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Direct relationships with producers in over 15 countries across Asia, Africa, and South America.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-primary sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Distribution Network</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Established distribution channels in North America, Europe, Middle East, and Asia-Pacific
                        regions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-primary sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Strategic Partnerships</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Collaborations with leading retailers, hospitality groups, and specialty stores in over 30
                        countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Clients Section */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Trusted Worldwide</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Our clients and partners across the global tea and coffee industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-12 w-24 rounded-md bg-muted sm:h-16 sm:w-32"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Coffee beans background"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl text-black">
                Ready to Elevate Your Tea & Coffee Experience?
              </h2>
              <p className="mb-6 text-base sm:mb-8 sm:text-lg text-black">
                Whether you&apos;re looking to source premium products, rent equipment for an event, or need complete
                beverage service, our team is here to help.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Button size="lg" className="w-full font-medium sm:w-auto">
                  Request a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-background/10 font-medium backdrop-blur-sm sm:w-auto text-black"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
