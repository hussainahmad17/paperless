import products from '@/data/products';
import ProductCard from '@/components/ProductsCard';

export default async function CategoryPage({ params }) {
  const category = params.category;
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold capitalize mb-6 text-gray-800">{category} Products</h2>
      <div className="flex flex-wrap gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-600">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
