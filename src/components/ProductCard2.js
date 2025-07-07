import Link from 'next/link';

const ProductCard2 = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="bg-gray-100 h-48 flex items-center justify-center cursor-pointer">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-medium text-gray-400 mb-2 line-clamp-2 text-center">
          {product.name}
        </h3>
        <div className="flex justify-center items-center">
          <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
        </div>
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;