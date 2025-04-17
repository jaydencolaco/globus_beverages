"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  category: string
  subcategory: string
  price: number
  unit: string
  origin: string
  description: string
  image: string
  rating: number
  reviewCount: number
  tags: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    if (isWishlisted) {
      toast.info("Removed from wishlist", {
        description: `${product.name} has been removed from your wishlist.`,
        duration: 3000,
      })
    } else {
      toast.success("Added to wishlist", {
        description: `${product.name} has been added to your wishlist.`,
        duration: 3000,
      })
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-primary text-primary" : ""}`} />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
            <CardDescription className="capitalize">
              {product.subcategory} {product.category}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${product.price}</div>
            <div className="text-sm text-muted-foreground">per {product.unit}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-2 flex items-center">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{product.rating}</span>
          </div>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{product.reviewCount} reviews</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        {product.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex w-full gap-2">
          <Button variant="outline" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button asChild className="w-full">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

