'use client';
import Image from 'next/image';
import Link from 'next/link';

const categoryImages = {
  hardware: '/images/hardware.jpeg',
  medical: '/images/medical.jpg',
  mobile: '/images/mobile.jpeg',
  gifts: '/images/gift.jpeg',
};

const bgColors = {
  hardware: 'bg-pink-100',
  medical: 'bg-blue-100',
  mobile: 'bg-green-100',
  gifts: 'bg-yellow-100',
};

export default function CategoryCard({ name, slug }) {
  const image = categoryImages[slug];
  const bg = bgColors[slug] || 'bg-gray-100';

  return (
    <Link href={`/category/${slug}`}>
      <div className={`relative rounded-2xl shadow-md p-4 h-40 w-full flex flex-col justify-between ${bg} transition-transform hover:scale-[1.03]`}>
        {image && (
          <div className="w-full h-20 relative mb-2">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        )}
        <h3 className="text-center text-md font-medium text-gray-800">{name}</h3>
      </div>
    </Link>
  );
}
