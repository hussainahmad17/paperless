import products from '@/data/products';

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-6 text-gray-600">Product not found.</div>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl shadow"
      />
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2 text-lg">Price: ${product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}
