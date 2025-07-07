"use client"
import { useState } from "react"
import products from "@/data/products"
import StarRating from "@/components/StarRating"
import { useCart } from "@/context/CartContext"

export default function ProductDetailPage({ params }) {
  const { id } = params
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  if (!product) return <div className="p-6 text-gray-600">Product not found.</div>

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <StarRating rating={4.5} />

          <p className="text-2xl font-semibold text-green-600">${product.price}</p>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mb-4">
              Category: <span className="capitalize font-medium">{product.category}</span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
              isAdded ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isAdded ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
