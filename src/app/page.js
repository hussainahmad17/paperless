import CategoryCard from '@/components/CategoryCard';

export default function Home() {
  const categories = [
    { name: 'Hardware', slug: 'hardware' },
    { name: 'Medical Equipment', slug: 'medical' },
    { name: 'Mobile Accessories', slug: 'mobile' },
    { name: 'Cards or Gifts', slug: 'gifts' },
  ];

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Popular Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(({ name, slug }) => (
          <CategoryCard key={slug} name={name} slug={slug} />
        ))}
      </div>
    </div>
  );
}
