import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <Link
          href={`/product/${product.id}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
