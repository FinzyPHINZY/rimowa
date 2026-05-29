import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../data/categories';
import './categories.css';

const Categories = () => {
  return (
    <div className="pb-36">
      <div className="max-w-7xl mx-auto">
        <h3 className="mt-0 mb-4 text-center text-xs font-normal uppercase leading-normal tracking-[0.18em] text-[#0d0900]">
          categories
        </h3>

        <h2 className="mt-0 mb-12 text-center text-5xl font-normal leading-[1.2] tracking-[0.06em] text-[#0d0900]">
          Find a match for every kind of journey
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-card__image-wrap">
                <Image
                  src={category.image}
                  alt={category.label}
                  width={630}
                  height={790}
                  className="category-card__image"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <Link href={category.href} className="category-card__link">
                {category.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
