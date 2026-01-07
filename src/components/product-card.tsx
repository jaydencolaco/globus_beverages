"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { toast } from "sonner"
import type { Product } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
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
        <div className="relative h-48 w-full overflow-hidden sm:h-64">
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
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm sm:h-10 sm:w-10"
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isWishlisted ? "fill-primary text-primary" : ""}`} />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <CardHeader className="pb-2 p-3 sm:p-6 sm:pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <CardTitle className="line-clamp-1 text-base sm:text-lg">{product.name}</CardTitle>
            <CardDescription className="capitalize text-sm">
              {product.subcategory} {product.category}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-base font-bold sm:text-lg">₹{product.price}</div>
            <div className="text-xs text-muted-foreground sm:text-sm">per {product.unit}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2 p-3 sm:p-6 sm:pb-2">
        <div className="mb-2 flex items-center">
          <div className="flex items-center">
            <Star className="mr-1 h-3 w-3 fill-primary text-primary sm:h-4 sm:w-4" />
            <span className="text-sm font-medium sm:text-base">{product.rating}</span>
          </div>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground sm:text-sm">{product.reviewCount} reviews</span>
        </div>
        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">{product.description}</p>
        {product.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 sm:mt-3">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-3 p-3 sm:p-6 sm:pt-4">
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="w-full text-xs sm:text-sm bg-transparent" onClick={handleAddToCart}>
            <ShoppingCart className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
            Add to Cart
          </Button>
          <Button asChild className="w-full text-xs sm:text-sm">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
