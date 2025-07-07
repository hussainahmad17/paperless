"use client"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault() 
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 transition-transform hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-44 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
        <p className="text-gray-600 mb-3">${product.price}</p>

        <div className="flex gap-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 text-center py-2 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2 px-4 rounded-lg font-medium text-white transition-colors ${
              isAdded ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isAdded ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
