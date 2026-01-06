import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Coffee,
  Globe,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/background_globus.png"
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
                <span className="text-white">From Source to Cup</span>
              </h1>
              <p className="mb-6 text-base sm:mb-8 sm:text-lg md:text-xl">
                Global sourcing, importing, exporting, and distribution of the
                finest tea and coffee products from around the world.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="w-full font-medium sm:w-auto bg-black hover:bg-white/90 hover:text-black"
                >
                  <Link rel="stylesheet" href="/products">
                    Explore Our Products
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-background/20 font-medium backdrop-blur-sm sm:w-auto border-white text-white hover:bg-white/20"
                >
                  <Link rel="stylesheet" href="/contact">
                    Contact Us{" "}
                  </Link>
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
                With over 10 years of experience, we connect premium producers
                with markets worldwide through our extensive distribution
                network.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none bg-muted/30 shadow-sm">
                <CardContent className="p-6">
                  <ShoppingBag className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Premium Products</h3>
                  <p className="mb-4 text-muted-foreground">
                    High-quality tea, coffee, and beverage premixes sourced from
                    around the world.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Explore our products <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted/30 shadow-sm">
                <CardContent className="p-6">
                  <Coffee className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Equipment Rental</h3>
                  <p className="mb-4 text-muted-foreground">
                    Professional tea and coffee machines available for
                    short-term events or long-term use.
                  </p>
                  <Link
                    href="#equipment"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View equipment options{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted/30 shadow-sm">
                <CardContent className="p-6">
                  <Calendar className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Event Services</h3>
                  <p className="mb-4 text-muted-foreground">
                    Complete beverage setups for weddings, seminars,
                    exhibitions, and corporate events.
                  </p>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    See our event gallery{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
                <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                  Event Services & Gallery
                </h2>
                <p className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-lg">
                  We provide premium beverage services for events of all types
                  and sizes. From elegant weddings to corporate exhibitions, our
                  team delivers exceptional tea and coffee experiences.
                </p>
                <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Tea and coffee machine rentals for events of any duration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Premium beverage premixes for consistent quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Both premix and fresh milk coffee options available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">
                      Professional service for weddings, seminars, and
                      exhibitions
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-black hover:bg-black/90"
                  >
                    <Link href="/services">View Our Services</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto bg-transparent border-black text-black hover:bg-black/10"
                  >
                    <Link href="/gallery">Browse Event Gallery</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/elegant-wedding-coffee-service-setup.jpg"
                        alt="Wedding coffee service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/exhibition-coffee-booth-professional.jpg"
                        alt="Exhibition coffee booth"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative -top-4 space-y-3 sm:-top-8 sm:space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/corporate-event-beverage-service.jpg"
                        alt="Corporate event service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/seminar-coffee-break-station.jpg"
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-6">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                Our Premium Selection
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                We source the finest teas and coffees from renowned growing
                regions across the globe.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Tea Premixes",
                  description:
                    "A wide range of instant tea premixes crafted for consistent taste and quick dispensing.",
                  image: "/lemontea_g.png",
                },
                {
                  title: "Coffee Premixes",
                  description:
                    "Premium coffee premixes designed for vending machines and high-volume consumption.",
                  image: "/coffeepremix.png",
                },
                {
                  title: "Coffee Beans",
                  description:
                    "Carefully sourced coffee beans suitable for bean-to-cup machines and fresh brews.",
                  image: "/coffeebeans.webp",
                },
                {
                  title: "Specialty Beverages",
                  description:
                    "A versatile selection including soups, badam milk, peach iced tea, lemon iced tea and other instant beverages.",
                  image: "/peachtea.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border bg-background shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 text-lg font-bold sm:text-xl">
                      {product.title}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                      {product.description}
                    </p>

                    <Link
                      href="/products"
                      className="inline-flex items-center text-sm font-medium text-black hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center sm:mt-8">
              <Button asChild className="bg-black hover:bg-black/90">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {/* <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                Comprehensive Services
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                End-to-end solutions for tea and coffee businesses worldwide.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                    For Producers & Exporters
                  </h3>
                  <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
                    {[
                      "Access to global markets and distribution channels",
                      "Logistics and shipping management",
                      "Regulatory compliance and documentation",
                      "Market intelligence and pricing strategies",
                      "Quality control and certification assistance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto bg-black hover:bg-black/90">
                  Partner With Us
                </Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                    For Retailers & Distributors
                  </h3>
                  <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
                    {[
                      "Diverse portfolio of premium tea and coffee products",
                      "Flexible order quantities and customization options",
                      "Reliable supply chain and consistent quality",
                      "Private labeling and packaging solutions",
                      "Marketing support and product education",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto bg-black hover:bg-black/90">
                  Source Products
                </Button>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-12 sm:py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center sm:mb-12">
      <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
        Our Services
      </h2>
      <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
        Complete beverage solutions for businesses and events.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

      {/* Service 1 */}
      <div className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm sm:p-8">
        <div>
          <h3 className="mb-5 text-xl font-bold sm:text-2xl">
            Business & Distribution Solutions
          </h3>
          <ul className="mb-6 space-y-3">
            {[
              "Support to start your own tea or coffee outlet using vending machines and premixes",
              "Supply and distribution of tea & coffee vending machines",
              "Wide range of tea premixes, coffee premixes, coffee beans and fresh milk",
              "Specialty beverages including soups, iced teas and health drinks",
              "Authorized dealers for leading national and international brands",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-black" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full bg-black hover:bg-black/90">
          Explore Business Solutions
        </Button>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm sm:p-8">
        <div>
          <h3 className="mb-5 text-xl font-bold sm:text-2xl">
            Event Beverage Services
          </h3>
          <ul className="mb-6 space-y-3">
            {[
              "End-to-end beverage setup for exhibitions, corporate events and functions",
              "Complete support including machines, manpower and consumables",
              "Fresh milk, premixes and specialty drinks arranged as per event needs",
              "On-site service management ensuring smooth and hassle-free execution",
              "Flexible setups tailored to event size, duration and guest volume",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-black" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full bg-black hover:bg-black/90">
          Plan an Event
        </Button>
      </div>

    </div>
  </div>
</section>


        {/* Global Reach Section */}
        <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                Our Global Reach
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Operating across continents to connect producers with markets
                worldwide.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative h-64 overflow-hidden rounded-lg border shadow-sm sm:h-80 lg:h-96">
                <Image
                  src="/world-map-global-business-network.jpg"
                  alt="World map showing our global operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
                  Connecting Global Markets
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-black sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Sourcing Regions</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Direct relationships with producers in over 15 countries
                        across Asia, Africa, and South America.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-black sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Distribution Network</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Established distribution channels in North America,
                        Europe, Middle East, and Asia-Pacific regions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 shrink-0 text-black sm:mr-4 sm:h-6 sm:w-6" />
                    <div>
                      <h4 className="font-bold">Strategic Partnerships</h4>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        Collaborations with leading retailers, hospitality
                        groups, and specialty stores in over 30 countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Clients Section */}
        {/* <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                Trusted Worldwide
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Our clients and partners across the global tea and coffee
                industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="relative h-12 w-24 sm:h-16 sm:w-32">
                    <Image
                      src={`/generic-company-logo.png?key=t5vjd&height=64&width=128&query=company+logo+${
                        index + 1
                      }`}
                      alt={`Client logo ${index + 1}`}
                      fill
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/coffee-beans-dark-background.jpg"
              alt="Coffee beans background"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-white">
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-6 text-base sm:mb-8 sm:text-lg">
                Whether you're looking to source premium products or explore
                distribution opportunities, we're here to help your business
                grow.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Button
                  size="lg"
                  className="w-full font-medium sm:w-auto bg-white hover:bg-white/90 text-black"
                >
                  Explore Our Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-background/20 font-medium backdrop-blur-sm sm:w-auto border-white text-white hover:bg-white/20"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
