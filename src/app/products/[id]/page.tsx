"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Star, Truck, Shield, Award } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/Footer"
import { useCart } from "@/components/cart/cart-provider"
import { db, findProductById, getProductReviews, addReview } from "@/lib/db"

export default function ProductPage() {
  const params = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  const product = findProductById(params.id as string)
  const reviews = getProductReviews(params.id as string)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link href="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = async () => {
    try {
      await addItem(product.id, quantity)
      toast.success("Added to cart", {
        description: `${quantity} x ${product.name} added to your cart.`,
        duration: 3000,
      })
    } catch (error) {
      toast.error("Failed to add to cart")
    }
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    if (isWishlisted) {
      toast.info("Removed from wishlist")
    } else {
      toast.success("Added to wishlist")
    }
  }

  const handleSubmitReview = () => {
    if (!newReview.comment.trim()) {
      toast.error("Please write a review comment")
      return
    }

    addReview({
      productId: product.id,
      userId: "guest",
      userName: "Guest User",
      rating: newReview.rating,
      comment: newReview.comment,
      verified: false,
    })

    setNewReview({ rating: 5, comment: "" })
    toast.success("Review submitted successfully!")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4 p-0 h-auto">
              <Link href="/products" className="flex items-center text-black hover:text-black/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                    <Image
                      src={product.image || `/placeholder.svg?height=200&width=200`}
                      alt={`${product.name} view ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge
                      variant="outline"
                      className={`mb-2 ${product.productType === "premix" ? "border-yellow-600 text-yellow-600" : "border-black text-black"}`}
                    >
                      {product.category} • {product.subcategory}
                    </Badge>
                    <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleToggleWishlist} className="shrink-0">
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{product.reviewCount} reviews</span>
                  <span className="text-muted-foreground">•</span>
                  <span className={`text-sm ${product.stock < 10 ? "text-red-600" : "text-black"}`}>
                    {product.stock < 10 ? "Low Stock" : "In Stock"} ({product.stock} available)
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold">₹{product.price}</div>
                  <div className="text-sm text-muted-foreground">per {product.unit}</div>
                </div>

                <p className="text-muted-foreground mb-4">{product.description}</p>

                {product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={
                          product.productType === "premix" ? "bg-yellow-50 text-yellow-700" : "bg-gray-100 text-black"
                        }
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="h-8 w-8"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleAddToCart} className="flex-1 bg-black hover:bg-black/90" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-black text-black hover:bg-black/10 bg-transparent"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-black" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-black" />
                  <span>Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-black" />
                  <span>Premium Grade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-black"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <dt className="font-medium">{key}:</dt>
                            <dd className="text-muted-foreground">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Write a Review</CardTitle>
                      <CardDescription>Share your experience with this product</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Rating</label>
                        <Select
                          value={newReview.rating.toString()}
                          onValueChange={(value: string) =>
                            setNewReview((prev) => ({ ...prev, rating: Number.parseInt(value) }))
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Stars</SelectItem>
                            <SelectItem value="4">4 Stars</SelectItem>
                            <SelectItem value="3">3 Stars</SelectItem>
                            <SelectItem value="2">2 Stars</SelectItem>
                            <SelectItem value="1">1 Star</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Your Review</label>
                        <Textarea
                          placeholder="Tell others about your experience with this product..."
                          value={newReview.comment}
                          onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button onClick={handleSubmitReview} className="bg-black hover:bg-black/90">
                        Submit Review
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviews.length > 0 ? (
                      reviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium">{review.userName}</span>
                                  {review.verified && (
                                    <Badge variant="secondary" className="text-xs bg-gray-100 text-black">
                                      Verified Purchase
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "fill-muted text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {review.createdAt.toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Free Shipping</h4>
                        <p className="text-sm text-muted-foreground">
                          Free standard shipping on all orders over ₹500. Delivery within 3-5 business days.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Express Shipping</h4>
                        <p className="text-sm text-muted-foreground">
                          Express delivery available for ₹99. Get your order within 1-2 business days.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">International Shipping</h4>
                        <p className="text-sm text-muted-foreground">
                          We ship worldwide. International shipping rates calculated at checkout.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Return Policy</h4>
                        <p className="text-sm text-muted-foreground">
                          30-day return policy. Items must be unopened and in original packaging.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {db.products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="group cursor-pointer">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium line-clamp-1 mb-1">{relatedProduct.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{relatedProduct.rating}</span>
                        </div>
                        <p className="font-bold">₹{relatedProduct.price}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
