// Enhanced in-memory database for demo
interface User {
  id: string
  email: string
  name: string
  phone?: string
  verified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string
  category: string
  subcategory: string
  origin: string
  image: string
  rating: number
  reviewCount: number
  tags: string[]
  inStock: boolean
  stock: number
  productType?: "premix" | "machine" | "other"
  features: string[]
  specifications: Record<string, string>
}

interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
  verified: boolean
}

interface CartItem {
  id: string
  userId: string
  productId: string
  quantity: number
  createdAt: Date
  updatedAt: Date
}

interface Consultation {
  id: string
  userId: string
  fullName: string
  phoneNumber: string
  preferredTime: Date
  discussionTopic: string
  status: "PENDING" | "SCHEDULED" | "COMPLETED" | "CANCELLED"
  createdAt: Date
  updatedAt: Date
}

// In-memory storage
export const db = {
  users: [] as User[],
  products: [
    {
      id: "1",
      name: "Premium Cappuccino Premix",
      category: "coffee",
      subcategory: "premix",
      price: 299.99,
      unit: "1kg",
      origin: "India",
      description:
        "Rich and creamy cappuccino premix with authentic coffee flavor. Perfect for events, offices, and cafes. Just add hot water for instant cappuccino perfection.",
      image: "/creamy-cappuccino-coffee-in-white-cup-with-foam-ar.jpg",
      rating: 4.7,
      reviewCount: 89,
      tags: ["Instant", "Creamy", "Event Ready"],
      inStock: true,
      stock: 120,
      productType: "premix",
      features: ["Instant preparation", "Consistent quality", "Rich crema", "Long shelf life", "Cost effective"],
      specifications: {
        "Serving Size": "20g per cup",
        "Servings per Pack": "50 cups",
        "Shelf Life": "12 months",
        Ingredients: "Coffee, Milk Powder, Sugar",
        Preparation: "Add hot water",
      },
    },
    {
      id: "2",
      name: "Masala Chai Premix",
      category: "tea",
      subcategory: "premix",
      price: 249.99,
      unit: "1kg",
      origin: "India",
      description:
        "Authentic Indian masala chai premix with a perfect blend of tea, spices, and milk. Traditional taste in an instant format, ideal for large gatherings and events.",
      image: "/indian-masala-chai-tea-in-glass-cup-with-spices-ci.jpg",
      rating: 4.9,
      reviewCount: 156,
      tags: ["Spiced", "Traditional", "Instant"],
      inStock: true,
      stock: 98,
      productType: "premix",
      features: [
        "Authentic spice blend",
        "Perfect balance",
        "Quick preparation",
        "Aromatic flavor",
        "Traditional recipe",
      ],
      specifications: {
        "Serving Size": "18g per cup",
        "Servings per Pack": "55 cups",
        "Shelf Life": "12 months",
        Spices: "Cardamom, Ginger, Cinnamon",
        Preparation: "Add hot water or milk",
      },
    },
    {
      id: "3",
      name: "Green Tea Matcha Premix",
      category: "tea",
      subcategory: "premix",
      price: 399.99,
      unit: "500g",
      origin: "Japan",
      description:
        "Premium matcha green tea premix with authentic Japanese matcha powder. Convenient instant format without compromising on quality and health benefits.",
      image: "/japanese-matcha-green-tea-powder-in-bowl-with-whis.jpg",
      rating: 4.7,
      reviewCount: 73,
      tags: ["Matcha", "Antioxidant", "Premium"],
      inStock: true,
      stock: 64,
      productType: "premix",
      features: ["Authentic matcha", "High antioxidants", "Smooth texture", "Natural sweetness", "Instant preparation"],
      specifications: {
        "Serving Size": "15g per cup",
        "Servings per Pack": "33 cups",
        "Shelf Life": "10 months",
        "Matcha Grade": "Ceremonial",
        Preparation: "Add hot water, whisk gently",
      },
    },
    {
      id: "4",
      name: "Hot Chocolate Premix",
      category: "coffee",
      subcategory: "premix",
      price: 279.99,
      unit: "1kg",
      origin: "Belgium",
      description:
        "Rich Belgian chocolate premix with a smooth, creamy texture. Perfect for cold winter evenings and events. Premium cocoa blend for authentic chocolate experience.",
      image: "/rich-hot-chocolate-drink-with-marshmallows-whipped.jpg",
      rating: 4.8,
      reviewCount: 112,
      tags: ["Chocolate", "Creamy", "Premium"],
      inStock: true,
      stock: 85,
      productType: "premix",
      features: ["Belgian cocoa", "Rich and creamy", "Easy preparation", "Premium ingredients", "Family favorite"],
      specifications: {
        "Serving Size": "25g per cup",
        "Servings per Pack": "40 cups",
        "Shelf Life": "12 months",
        "Cocoa Content": "35%",
        Preparation: "Add hot milk or water",
      },
    },
    {
      id: "5",
      name: "Lemon Iced Tea Premix",
      category: "tea",
      subcategory: "premix",
      price: 229.99,
      unit: "1kg",
      origin: "India",
      description:
        "Refreshing lemon iced tea premix with real tea extracts and natural lemon flavor. Perfect for summer events, parties, and outdoor gatherings.",
      image: "/refreshing-lemon-iced-tea-in-glass-with-ice-cubes-.jpg",
      rating: 4.6,
      reviewCount: 95,
      tags: ["Refreshing", "Summer", "Citrus"],
      inStock: true,
      stock: 6,
      productType: "premix",
      features: ["Real tea extracts", "Natural lemon", "Refreshing taste", "Summer perfect", "Quick prep"],
      specifications: {
        "Serving Size": "20g per cup",
        "Servings per Pack": "50 cups",
        "Shelf Life": "12 months",
        Flavor: "Lemon & Tea",
        Preparation: "Add cold water and ice",
      },
    },
    {
      id: "6",
      name: "Vanilla Latte Premix",
      category: "coffee",
      subcategory: "premix",
      price: 319.99,
      unit: "1kg",
      origin: "Italy",
      description:
        "Smooth vanilla latte premix with authentic espresso flavor. Creamy, sweet, and perfectly balanced for a cafe-style experience at events and offices.",
      image: "/creamy-vanilla-latte-coffee-in-glass-cup-with-foam.jpg",
      rating: 4.8,
      reviewCount: 134,
      tags: ["Vanilla", "Latte", "Cafe Style"],
      inStock: true,
      stock: 92,
      productType: "premix",
      features: ["Authentic vanilla", "Espresso blend", "Creamy texture", "Cafe quality", "Easy to prepare"],
      specifications: {
        "Serving Size": "22g per cup",
        "Servings per Pack": "45 cups",
        "Shelf Life": "12 months",
        Ingredients: "Coffee, Vanilla, Milk Powder",
        Preparation: "Add hot water",
      },
    },
    {
      id: "7",
      name: "Professional Espresso Machine",
      category: "coffee",
      subcategory: "machine",
      price: 45999.99,
      unit: "unit",
      origin: "Italy",
      description:
        "Commercial-grade espresso machine with dual boiler system. Perfect for events, offices, and cafes. Brew espresso and steam milk simultaneously with professional results.",
      image: "/professional-commercial-espresso-coffee-machine-st.jpg",
      rating: 4.8,
      reviewCount: 42,
      tags: ["Commercial", "Dual Boiler", "Professional"],
      inStock: true,
      stock: 8,
      productType: "machine",
      features: [
        "Dual boiler system",
        "Simultaneous brewing",
        "PID temperature control",
        "Commercial grade",
        "Easy maintenance",
      ],
      specifications: {
        Boiler: "Dual (1.5L brew + 1L steam)",
        Power: "2800W",
        Pressure: "15 bar pump",
        "Cup Capacity": "150-200 cups/day",
        Warranty: "2 years",
      },
    },
    {
      id: "8",
      name: "8-Flavor Beverage Dispenser",
      category: "coffee",
      subcategory: "machine",
      price: 28999.99,
      unit: "unit",
      origin: "India",
      description:
        "Versatile vending machine for premix beverages. 8 canister capacity for different flavors. Perfect for offices, events, and hospitality. Easy to operate and maintain.",
      image: "/modern-beverage-vending-dispenser-machine-office-m.jpg",
      rating: 4.6,
      reviewCount: 67,
      tags: ["Multi-flavor", "Vending", "High Capacity"],
      inStock: true,
      stock: 15,
      productType: "machine",
      features: ["8 flavor options", "Hot water dispenser", "Cup sensor", "Easy refilling", "Low maintenance"],
      specifications: {
        Canisters: "8 x 1.5kg capacity",
        "Water Tank": "10 liters",
        Power: "2000W",
        "Cups per Hour": "120 cups",
        Warranty: "1 year",
      },
    },
    {
      id: "9",
      name: "Commercial Coffee Maker",
      category: "coffee",
      subcategory: "machine",
      price: 18999.99,
      unit: "unit",
      origin: "Germany",
      description:
        "High-capacity commercial coffee maker for large events and offices. Brews up to 100 cups per hour. Durable stainless steel construction with programmable settings.",
      image: "/large-commercial-coffee-maker-machine-stainless-st.jpg",
      rating: 4.7,
      reviewCount: 54,
      tags: ["High Capacity", "Durable", "Programmable"],
      inStock: true,
      stock: 12,
      productType: "machine",
      features: ["100 cups per hour", "Stainless steel", "Programmable timer", "Keep warm function", "Easy cleaning"],
      specifications: {
        Capacity: "5 liters",
        Power: "1800W",
        Material: "Stainless Steel",
        "Cups per Hour": "100 cups",
        Warranty: "1 year",
      },
    },
    {
      id: "10",
      name: "Electric Tea Kettle - Commercial",
      category: "tea",
      subcategory: "machine",
      price: 8999.99,
      unit: "unit",
      origin: "China",
      description:
        "Large capacity electric kettle for commercial use. Quick boiling with temperature control. Perfect for tea service at events, offices, and restaurants.",
      image: "/large-commercial-electric-tea-kettle-stainless-ste.jpg",
      rating: 4.5,
      reviewCount: 38,
      tags: ["Quick Boil", "Temperature Control", "Large Capacity"],
      inStock: true,
      stock: 22,
      productType: "machine",
      features: ["Temperature control", "Quick boiling", "Large capacity", "Auto shut-off", "Cordless pouring"],
      specifications: {
        Capacity: "3 liters",
        Power: "1500W",
        Material: "Stainless Steel",
        "Boil Time": "8-10 minutes",
        Warranty: "6 months",
      },
    },
    {
      id: "11",
      name: "Milk Frother & Steamer",
      category: "coffee",
      subcategory: "machine",
      price: 5999.99,
      unit: "unit",
      origin: "Italy",
      description:
        "Professional milk frother and steamer for perfect cappuccinos and lattes. Hot and cold frothing options. Ideal for specialty coffee service at events.",
      image: "/professional-milk-frother-steamer-machine-stainles.jpg",
      rating: 4.6,
      reviewCount: 29,
      tags: ["Frother", "Hot & Cold", "Professional"],
      inStock: true,
      stock: 18,
      productType: "machine",
      features: ["Hot and cold froth", "Multiple textures", "Quick operation", "Easy cleaning", "Compact design"],
      specifications: {
        Capacity: "300ml",
        Power: "500W",
        Functions: "Hot & Cold Froth",
        Material: "Stainless Steel",
        Warranty: "1 year",
      },
    },
    {
      id: "12",
      name: "Automatic Tea Maker",
      category: "tea",
      subcategory: "machine",
      price: 12999.99,
      unit: "unit",
      origin: "Japan",
      description:
        "Advanced automatic tea maker with temperature presets for different tea types. Programmable brewing time and strength. Perfect for premium tea service.",
      image: "/automatic-tea-maker-machine-glass-carafe-temperatu.jpg",
      rating: 4.7,
      reviewCount: 31,
      tags: ["Automatic", "Presets", "Premium"],
      inStock: true,
      stock: 9,
      productType: "machine",
      features: [
        "Temperature presets",
        "Programmable timer",
        "Multiple tea types",
        "Keep warm function",
        "Glass carafe",
      ],
      specifications: {
        Capacity: "1.5 liters",
        Power: "1200W",
        Presets: "5 tea types",
        Material: "Glass & Steel",
        Warranty: "1 year",
      },
    },
  ] as Product[],
  reviews: [
    {
      id: "1",
      productId: "1",
      userId: "user1",
      userName: "Sarah Johnson",
      rating: 5,
      comment: "Excellent cappuccino premix! Tastes just like cafe-quality coffee. Perfect for our office events.",
      createdAt: new Date("2024-01-15"),
      verified: true,
    },
    {
      id: "2",
      productId: "2",
      userId: "user2",
      userName: "Rajesh Kumar",
      rating: 5,
      comment: "Best masala chai premix I've tried. The spice blend is perfect and authentic.",
      createdAt: new Date("2024-01-10"),
      verified: true,
    },
    {
      id: "3",
      productId: "7",
      userId: "user3",
      userName: "Emma Wilson",
      rating: 5,
      comment: "Professional grade machine. Makes perfect espresso every time. Worth the investment!",
      createdAt: new Date("2024-01-12"),
      verified: true,
    },
  ] as Review[],
  cartItems: [] as CartItem[],
  consultations: [] as Consultation[],
}

// Helper functions
export const findUserByEmail = (email: string) => {
  return db.users.find((user) => user.email === email)
}

export const createUser = (userData: Omit<User, "id" | "createdAt" | "updatedAt">) => {
  const user: User = {
    ...userData,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  db.users.push(user)
  return user
}

export const findProductById = (id: string) => {
  return db.products.find((product) => product.id === id)
}

export const getProductReviews = (productId: string) => {
  return db.reviews.filter((review) => review.productId === productId)
}

export const addReview = (reviewData: Omit<Review, "id" | "createdAt">) => {
  const review: Review = {
    ...reviewData,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date(),
  }
  db.reviews.push(review)

  // Update product rating
  const product = findProductById(reviewData.productId)
  if (product) {
    const reviews = getProductReviews(reviewData.productId)
    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0)
    product.rating = totalRating / reviews.length
    product.reviewCount = reviews.length
  }

  return review
}

export const getUserCartItems = (userId: string) => {
  return db.cartItems
    .filter((item) => item.userId === userId)
    .map((item) => ({
      ...item,
      product: findProductById(item.productId)!,
    }))
}

export const addToCart = (userId: string, productId: string, quantity = 1) => {
  const existingItem = db.cartItems.find((item) => item.userId === userId && item.productId === productId)

  if (existingItem) {
    existingItem.quantity += quantity
    existingItem.updatedAt = new Date()
    return existingItem
  } else {
    const newItem: CartItem = {
      id: Math.random().toString(36).substring(7),
      userId,
      productId,
      quantity,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    db.cartItems.push(newItem)
    return newItem
  }
}

export const updateCartItemQuantity = (userId: string, productId: string, quantity: number) => {
  const item = db.cartItems.find((item) => item.userId === userId && item.productId === productId)

  if (item) {
    if (quantity <= 0) {
      const index = db.cartItems.indexOf(item)
      db.cartItems.splice(index, 1)
    } else {
      item.quantity = quantity
      item.updatedAt = new Date()
    }
  }
}

export const removeFromCart = (userId: string, productId: string) => {
  const index = db.cartItems.findIndex((item) => item.userId === userId && item.productId === productId)

  if (index > -1) {
    db.cartItems.splice(index, 1)
  }
}

export const clearUserCart = (userId: string) => {
  db.cartItems = db.cartItems.filter((item) => item.userId !== userId)
}

export const createConsultation = (
  consultationData: Omit<Consultation, "id" | "createdAt" | "updatedAt" | "status">,
) => {
  const consultation: Consultation = {
    ...consultationData,
    id: Math.random().toString(36).substring(7),
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  db.consultations.push(consultation)
  return consultation
}

export const createProduct = (productData: Omit<Product, "id">) => {
  const product: Product = {
    ...productData,
    id: Math.random().toString(36).substring(7),
  }
  db.products.push(product)
  return product
}

export const updateProduct = (id: string, productData: Partial<Product>) => {
  const index = db.products.findIndex((product) => product.id === id)
  if (index > -1) {
    db.products[index] = { ...db.products[index], ...productData }
    return db.products[index]
  }
  return null
}

export const deleteProduct = (id: string) => {
  const index = db.products.findIndex((product) => product.id === id)
  if (index > -1) {
    db.products.splice(index, 1)
    return true
  }
  return false
}
