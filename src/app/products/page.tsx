"use client"
import { useState } from "react"
import { Filter, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/product-card"
import { db } from "@/lib/db"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const products = db.products

  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  })

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative overflow-hidden bg-background border-b">
          <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl lg:text-6xl font-serif text-balance">
                Our Premium Collection
              </h1>
              <p className="mb-6 text-lg sm:mb-8 sm:text-xl text-muted-foreground text-pretty max-w-2xl">
                Discover our curated selection of beverage premixes and professional machines. From authentic flavors to
                cutting-edge equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/products/premixes">View Premixes</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                  <Link href="/products/machines">View Machines</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 sm:w-auto border-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-8 sm:mb-12">
              <div className="mb-8 sm:mb-10">
                <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1">
                  <TabsTrigger value="all" className="rounded-md px-4">
                    All Products
                  </TabsTrigger>
                  <TabsTrigger value="coffee" className="rounded-md px-4">
                    Coffee
                  </TabsTrigger>
                  <TabsTrigger value="tea" className="rounded-md px-4">
                    Tea
                  </TabsTrigger>
                  <TabsTrigger value="premixes" className="rounded-md px-4">
                    Premixes
                  </TabsTrigger>
                  <TabsTrigger value="machines" className="rounded-md px-4">
                    Machines
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </TabsContent>

              <TabsContent value="coffee" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts
                  .filter((product) => product.category === "coffee")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>

              <TabsContent value="tea" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts
                  .filter((product) => product.category === "tea")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>

              <TabsContent value="premixes" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts
                  .filter((product) => product.productType === "premix")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>

              <TabsContent value="machines" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts
                  .filter((product) => product.productType === "machine")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl font-serif">Need a Custom Solution?</h2>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                We specialize in creating bespoke beverage solutions for events, offices, and businesses of all sizes.
              </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
