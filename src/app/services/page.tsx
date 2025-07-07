import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Coffee, Gift, ShoppingBag, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Coffee service at an event"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl text-black">Our Services</h1>
              <p className="mb-8 text-lg md:text-xl text-black">
                Premium beverage solutions for businesses and events of all sizes.
              </p>
              <Button size="lg" asChild>
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Comprehensive Beverage Solutions</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                From premium products to state-of-the-art equipment and professional event services, we provide
                everything you need for an exceptional beverage experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none bg-muted/30 shadow-sm">
                <CardContent className="p-6">
                  <ShoppingBag className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Premium Products</h3>
                  <p className="mb-4 text-muted-foreground">
                    High-quality tea, coffee, and beverage premixes sourced from around the world.
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
                    Professional tea and coffee machines available for short-term events or long-term use.
                  </p>
                  <Link
                    href="#equipment"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View equipment options <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted/30 shadow-sm">
                <CardContent className="p-6">
                  <Calendar className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Event Services</h3>
                  <p className="mb-4 text-muted-foreground">
                    Complete beverage setups for weddings, seminars, exhibitions, and corporate events.
                  </p>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    See our event gallery <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold">Premium Beverage Premixes</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  We offer a wide range of high-quality tea, coffee, and specialty beverage premixes designed for
                  convenience without compromising on taste.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Tea Premixes</h3>
                    <p className="text-muted-foreground">
                      From classic black tea to exotic chai blends and herbal infusions, our tea premixes deliver
                      consistent flavor with minimal preparation.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Coffee Premixes</h3>
                    <p className="text-muted-foreground">
                      Available in both premix-only and fresh milk compatible options. Our coffee premixes range from
                      everyday blends to specialty varieties.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Specialty Beverages</h3>
                    <p className="text-muted-foreground">
                      Hot chocolate, flavored lattes, matcha, and seasonal specialties – all available in convenient
                      premix formats for consistent quality.
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/products">View Our Product Catalog</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-lg border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Various tea and coffee premixes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section id="equipment" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-lg border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Professional coffee machine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Tea & Coffee Machines</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  We provide a range of professional-grade beverage equipment suitable for any setting, from small
                  offices to large events.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Coffee Machines</h3>
                    <p className="text-muted-foreground">
                      From bean-to-cup machines to espresso systems and filter coffee makers. Compatible with both
                      premix and fresh milk options.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Tea Brewers</h3>
                    <p className="text-muted-foreground">
                      Specialized equipment for brewing perfect tea, including automated systems for consistent results
                      every time.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="mb-2 text-lg font-semibold">Accessories</h3>
                    <p className="text-muted-foreground">
                      Water filters, milk frothers, temperature-controlled kettles, and other accessories to complete
                      your beverage setup.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">Short-Term Rental</Button>
                  <Button>Long-Term Leasing Options</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Services Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Event Beverage Services</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                We provide complete beverage solutions for events of all types and sizes, from intimate gatherings to
                large-scale exhibitions.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Gift className="h-10 w-10 text-primary" />,
                  title: "Weddings",
                  description:
                    "Elegant coffee and tea service for your special day, with customizable options to match your wedding theme.",
                },
                {
                  icon: <Utensils className="h-10 w-10 text-primary" />,
                  title: "Corporate Events",
                  description:
                    "Professional beverage service for meetings, conferences, and corporate functions with branded options available.",
                },
                {
                  icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                  title: "Exhibitions",
                  description:
                    "Stand out at trade shows and exhibitions with premium beverage service that attracts and engages visitors.",
                },
                {
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                  title: "Seminars & Workshops",
                  description:
                    "Keep attendees refreshed and focused with quality beverages throughout your educational events.",
                },
              ].map((service, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="mb-4 text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg">See how we&apos;ve served at various events in our gallery:</p>
              <Button size="lg" asChild>
                <Link href="/gallery">Visit Our Event Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">How It Works</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                Our simple process ensures you get exactly what you need for your business or event.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-muted md:block"></div>
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    number: "01",
                    title: "Consultation",
                    description:
                      "We discuss your specific needs, event details, expected attendance, and beverage preferences.",
                  },
                  {
                    number: "02",
                    title: "Customized Proposal",
                    description:
                      "We create a tailored solution including product selection, equipment recommendations, and service options.",
                  },
                  {
                    number: "03",
                    title: "Setup & Training",
                    description:
                      "Our team handles delivery, installation, and provides training on equipment use if needed.",
                  },
                  {
                    number: "04",
                    title: "Event Support",
                    description:
                      "For events, our staff can provide on-site service or be on call for technical support.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative md:flex md:items-center">
                    <div
                      className={`flex md:w-1/2 ${index % 2 === 0 ? "md:justify-end md:pr-12" : "md:order-2 md:justify-start md:pl-12"}`}
                    >
                      <div className="relative z-10 w-full max-w-md rounded-lg border bg-background p-6 shadow-sm">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          {step.number}
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div
                      className={`absolute left-1/2 top-6 z-10 hidden h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-background bg-primary md:block ${index % 2 === 0 ? "" : ""}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">See Us In Action</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Browse our gallery to see how we&apos;ve served at various events, from elegant weddings to corporate
                exhibitions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Event+${index + 1}`}
                    alt={`Event preview ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-primary/10 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold">Ready to Elevate Your Beverage Experience?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you need products, equipment, or complete event services, our team is here to help create the
                  perfect solution for your needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">Request a Quote</Button>
                  <Button size="lg" variant="outline">
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

