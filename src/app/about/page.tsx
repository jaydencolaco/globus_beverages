import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CustomerReviews } from "@/components/customer-reviews"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Tea plantation landscape"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl text-black">Our Story</h1>
              <p className="mb-8 text-lg md:text-xl text-black">
                Discover the passion and expertise behind Globus Beverages, a leader in the global tea and coffee
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Our Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1995, Globus Beverages began as a small specialty tea importer with a vision to bring the
                    world&apos;s finest teas to discerning customers. What started as a passion project by our founder, James
                    Chen, quickly evolved into a respected name in the global beverage industry.
                  </p>
                  <p>
                    Over the past three decades, we&apos;ve expanded our operations to include coffee sourcing, global
                    distribution networks, and comprehensive import-export services. Today, we operate in over 30
                    countries, connecting premium producers with markets worldwide.
                  </p>
                  <p>
                    Our commitment to quality, sustainability, and ethical trade practices has remained unwavering
                    throughout our growth. We believe in creating value at every step of the supply chain, from the
                    farmers who cultivate the crops to the consumers who enjoy the final product.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg border shadow-sm md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Historic photo of Globus Beverages"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CEO Profile Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold">Leadership</h2>
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold">James Chen</h3>
                  <p className="mb-4 text-lg text-primary">Founder & CEO</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over 35 years of experience in the tea and coffee industry, James Chen has established
                      himself as a visionary leader and expert in global beverage trade. His journey began in the tea
                      gardens of Taiwan, where his family had been cultivating tea for generations.
                    </p>
                    <p>
                      After completing his education in International Business at Harvard University, James worked with
                      several major beverage companies before founding Globus Beverages in 1995. His deep understanding
                      of both Eastern and Western markets, combined with his passion for quality, has been instrumental
                      in the company&apos;s success.
                    </p>
                    <p>
                      &quot;Our mission is to bridge cultures through exceptional tea and coffee experiences while ensuring
                      sustainable practices that benefit everyone in the supply chain,&quot; says James. Under his
                      leadership, Globus Beverages has pioneered several initiatives to improve traceability, fair trade
                      practices, and environmental sustainability in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact James
                  </Button>
                  <Link href="/team" className="text-sm font-medium text-primary hover:underline">
                    Meet our entire team →
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-lg border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="James Chen, Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Mission & Values</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                At Globus Beverages, we&apos;re guided by a set of core principles that define who we are and how we operate.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quality Excellence",
                  description:
                    "We are uncompromising in our commitment to sourcing and delivering the highest quality tea and coffee products.",
                },
                {
                  title: "Ethical Sourcing",
                  description:
                    "We believe in fair compensation for producers and sustainable farming practices that protect both people and the environment.",
                },
                {
                  title: "Global Perspective",
                  description:
                    "We embrace diversity and cultural exchange, bringing the world's finest beverages to markets across the globe.",
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously seek new ways to improve our products, services, and processes to better serve our partners and customers.",
                },
                {
                  title: "Transparency",
                  description:
                    "We believe in open communication and traceability throughout our supply chain, from farm to cup.",
                },
                {
                  title: "Long-term Relationships",
                  description:
                    "We value lasting partnerships with our suppliers, distributors, and customers, built on trust and mutual benefit.",
                },
              ].map((value, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Global Presence</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                With offices and partners around the world, we&apos;re positioned to serve the global tea and coffee market
                effectively.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Headquarters</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <address className="not-italic text-muted-foreground">
                    123 Trading Avenue
                    <br />
                    Global City, GC 10001
                    <br />
                    United States
                  </address>
                </div>
                <div className="mt-4 flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Asia Pacific Office</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <address className="not-italic text-muted-foreground">
                    456 Tea Garden Road
                    <br />
                    Singapore, 238839
                    <br />
                    Singapore
                  </address>
                </div>
                <div className="mt-4 flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">+65 6123 4567</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">European Office</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <address className="not-italic text-muted-foreground">
                    78 Coffee Lane
                    <br />
                    Amsterdam, 1012 AB
                    <br />
                    Netherlands
                  </address>
                </div>
                <div className="mt-4 flex items-start space-x-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">+31 20 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews />

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-primary/10 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-3xl font-bold">Join Our Journey</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you&apos;re a producer looking for global markets, a distributor seeking premium products, or a
                  business interested in partnership opportunities, we&apos;d love to connect with you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">Contact Us</Button>
                  <Button size="lg" variant="outline">
                    Learn About Our Services
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
