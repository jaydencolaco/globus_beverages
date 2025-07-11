import Image from "next/image"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/product-card"

// Sample product data
const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    category: "coffee",
    subcategory: "single-origin",
    price: 18.99,
    unit: "250g",
    origin: "Ethiopia",
    description: "A bright, complex coffee with floral and citrus notes. Medium roast with exceptional clarity.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviewCount: 124,
    tags: ["Organic", "Fair Trade"],
  },
  {
    id: 2,
    name: "Colombian Supremo",
    category: "coffee",
    subcategory: "single-origin",
    price: 16.99,
    unit: "250g",
    origin: "Colombia",
    description: "Well-balanced with caramel sweetness, medium body and a clean finish. Medium-dark roast.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 98,
    tags: ["Sustainable"],
  },
  {
    id: 3,
    name: "Morning Blend",
    category: "coffee",
    subcategory: "blend",
    price: 15.99,
    unit: "250g",
    origin: "Multiple",
    description: "A smooth, approachable blend perfect for starting your day. Notes of chocolate and nuts.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviewCount: 87,
    tags: [],
  },
  {
    id: 4,
    name: "Darjeeling First Flush",
    category: "tea",
    subcategory: "black",
    price: 22.99,
    unit: "100g",
    origin: "India",
    description: "The champagne of teas. Delicate, floral with muscatel notes and a bright finish.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviewCount: 76,
    tags: ["Organic", "Single Estate"],
  },
  {
    id: 5,
    name: "Japanese Sencha",
    category: "tea",
    subcategory: "green",
    price: 19.99,
    unit: "100g",
    origin: "Japan",
    description: "Vibrant, grassy and refreshing. A classic Japanese green tea with umami richness.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 65,
    tags: ["Organic"],
  },
  {
    id: 6,
    name: "Earl Grey Supreme",
    category: "tea",
    subcategory: "black",
    price: 17.99,
    unit: "100g",
    origin: "Blend",
    description: "Premium black tea infused with bergamot oil and blue cornflower petals.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviewCount: 92,
    tags: [],
  },
  {
    id: 7,
    name: "Espresso Roast",
    category: "coffee",
    subcategory: "blend",
    price: 17.99,
    unit: "250g",
    origin: "Multiple",
    description: "Dark, rich and perfect for espresso machines. Notes of dark chocolate and caramel.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviewCount: 108,
    tags: ["Fair Trade"],
  },
  {
    id: 8,
    name: "Silver Needle White Tea",
    category: "tea",
    subcategory: "white",
    price: 24.99,
    unit: "50g",
    origin: "China",
    description: "Delicate, sweet and refreshing with subtle floral notes. One of the most prized white teas.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviewCount: 45,
    tags: ["Organic", "Rare"],
  },
  {
    id: 9,
    name: "Chamomile Herbal Blend",
    category: "herbal",
    subcategory: "herbal",
    price: 14.99,
    unit: "100g",
    origin: "Multiple",
    description: "Soothing blend of chamomile flowers with hints of apple and honey. Caffeine-free.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviewCount: 73,
    tags: ["Organic", "Caffeine-free"],
  },
  {
    id: 10,
    name: "Peppermint Tea",
    category: "herbal",
    subcategory: "herbal",
    price: 12.99,
    unit: "100g",
    origin: "Multiple",
    description: "Refreshing peppermint leaves for a cooling and invigorating herbal tea experience.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.4,
    reviewCount: 56,
    tags: ["Organic", "Caffeine-free"],
  },
  {
    id: 11,
    name: "Hot Chocolate Mix",
    category: "others",
    subcategory: "beverage",
    price: 9.99,
    unit: "500g",
    origin: "Multiple",
    description: "Rich and creamy hot chocolate mix perfect for cold days and special occasions.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviewCount: 89,
    tags: ["Premium"],
  },
  {
    id: 12,
    name: "Matcha Latte Mix",
    category: "others",
    subcategory: "beverage",
    price: 19.99,
    unit: "200g",
    origin: "Japan",
    description: "Authentic Japanese matcha powder blended with premium ingredients for the perfect latte.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 67,
    tags: ["Organic", "Premium"],
  },
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=400&width=1920"
              alt="Product showcase"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl text-black">Our Products</h1>
              <p className="mb-6 text-base sm:mb-8 sm:text-lg lg:text-xl text-black">
                Explore our curated selection of premium teas and coffees sourced from the world&apos;s finest growing
                regions.
              </p>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2 sm:w-auto bg-transparent">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-8 sm:mb-12">
              <div className="mb-6 sm:mb-8">
                <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <TabsTrigger
                    value="all"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    All Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="coffee"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Coffee
                  </TabsTrigger>
                  <TabsTrigger
                    value="tea"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="herbal"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Herbal
                  </TabsTrigger>
                  <TabsTrigger
                    value="others"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Others
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </TabsContent>
              <TabsContent value="coffee" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "coffee")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>
              <TabsContent value="tea" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "tea")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>
              <TabsContent value="herbal" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "herbal")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>
              <TabsContent value="others" className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "others")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-center sm:mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </section>

        {/* Wholesale Section */}
        <section className="bg-muted/30 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Wholesale Solutions</h2>
                <p className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-lg">
                  Looking for larger quantities for your business? We offer competitive wholesale pricing, custom
                  packaging options, and flexible shipping arrangements.
                </p>
                <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
                  {[
                    "Bulk pricing for cafés, restaurants, and retailers",
                    "Custom blending and private labeling options",
                    "Consistent quality and reliable supply chain",
                    "Dedicated account manager for your business",
                    "Training and marketing support available",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full sm:w-auto">
                  Request Wholesale Information
                </Button>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg border shadow-sm sm:h-80 lg:h-96">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Wholesale coffee packaging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Orders Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary/10 p-6 sm:p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Can&apos;t Find What You&apos;re Looking For?</h2>
                <p className="mb-6 text-base text-muted-foreground sm:mb-8 sm:text-lg">
                  We specialize in sourcing specific varieties and creating custom blends for our clients. Contact our
                  team to discuss your requirements.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Our Sourcing Team
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
