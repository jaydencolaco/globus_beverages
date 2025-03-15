import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Ship,
  TrendingUp,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              height={1905}
              width={622}
              src="/carousel3.png"
              alt="Tea plantation landscape"
              className="w-full h-[70vh] object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 md:py-40">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Premium Tea & Coffee <br />
                <span className="text-white">From Source to Cup</span>
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                Global sourcing, importing, exporting, and distribution of the
                finest tea and coffee products from around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-medium">
                  Explore Our Products
                </Button>
                <a
                  href="https://wa.me/+919819991841?text=Enquire%20Now"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background/20 font-medium backdrop-blur-sm flex items-center gap-2"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      className="w-5 h-5"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      ></path>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Global Tea & Coffee Specialists
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                With over 25 years of experience, we connect premium producers
                with markets worldwide through our extensive distribution
                network.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none bg-background shadow-md">
                <CardContent className="p-6">
                  <Ship className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Import & Export</h3>
                  <p className="text-muted-foreground">
                    Seamless international trade operations with expertise in
                    regulations, logistics, and customs clearance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-background shadow-md">
                <CardContent className="p-6">
                  <Truck className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Distribution</h3>
                  <p className="text-muted-foreground">
                    Efficient distribution channels ensuring your products reach
                    markets quickly and in perfect condition.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none bg-background shadow-md">
                <CardContent className="p-6">
                  <TrendingUp className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Market Growth</h3>
                  <p className="text-muted-foreground">
                    Strategic partnerships and market insights to help your tea
                    and coffee business expand globally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Premium Selection
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We source the finest teas and coffees from renowned growing
                regions across the globe.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Lemon & Ginger Tea Premix",
                  description:
                    "Single-origin and artisanal blends from top coffee-producing regions.",
                  image: "/lemonteaglobusbeverages.png",
                },
                {
                  title: "Peach Ice Tea",
                  description:
                    "Exquisite loose leaf teas including black, green, oolong, and white varieties.",
                  image: "/peachtea.png",
                },
                {
                  title: "Nimbu Pani",
                  description:
                    "Caffeine-free blends crafted from herbs, fruits, and botanicals.",
                  image: "/nimbupani.png",
                },
                {
                  title: "Aam Panna",
                  description:
                    "Certified organic products meeting the highest quality standards.",
                  image: "/aampanna.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {product.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Comprehensive Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                End-to-end solutions for tea and coffee businesses worldwide.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-8 shadow-sm">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">
                    For Producers & Exporters
                  </h3>
                  <ul className="mb-6 space-y-3">
                    {[
                      "Access to global markets and distribution channels",
                      "Logistics and shipping management",
                      "Regulatory compliance and documentation",
                      "Market intelligence and pricing strategies",
                      "Quality control and certification assistance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto">
                  Partner With Us
                </Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-8 shadow-sm">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">
                    For Retailers & Distributors
                  </h3>
                  <ul className="mb-6 space-y-3">
                    {[
                      "Diverse portfolio of premium tea and coffee products",
                      "Flexible order quantities and customization options",
                      "Reliable supply chain and consistent quality",
                      "Private labeling and packaging solutions",
                      "Marketing support and product education",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-4 w-full sm:w-auto">
                  Source Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Global Reach
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Operating across continents to connect producers with markets
                worldwide.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg border shadow-sm">
                <Image
                  src="/soceitytea.jpg"
                  alt="World map showing our global operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-6 text-2xl font-bold">
                  Connecting Global Markets
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Globe className="mr-4 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold">Sourcing Regions</h4>
                      <p className="text-muted-foreground">
                        Direct relationships with producers in over 15 countries
                        across Asia, Africa, and South America.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-4 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold">Distribution Network</h4>
                      <p className="text-muted-foreground">
                        Established distribution channels in North America,
                        Europe, Middle East, and Asia-Pacific regions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-4 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold">Strategic Partnerships</h4>
                      <p className="text-muted-foreground">
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
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Trusted Worldwide
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Our clients and partners across the global tea and coffee
                industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-16 w-32 rounded-md bg-muted"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            {/* <Image
              src="/carousel.png"
              width={600}
              height={600}
              alt="Coffee beans background"
              className=" h-[50vh] brightness-[0.4] w-full "
            /> */}
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center text-black">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Elevate Your Tea & Coffee Business?
              </h2>
              <p className="mb-8 text-lg">
                Whether you`&apos;re looking to source premium products, expand
                your distribution, or enter new markets, our team is here to
                help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Request a Consultation
                </Button>
                <Button
                  size="lg"
                  className="text-white font-medium backdrop-blur-sm hover:bg-white hover:text-black hover:border-b-emerald-900 "
                >
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}
