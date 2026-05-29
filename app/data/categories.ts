export type Category = {
  id: string;
  image: string;
  label: string;
  href: string;
};

export const categories: Category[] = [
  {
    id: 'suitcases',
    image: '/category1.avif',
    label: 'See all Luggage',
    href: '/suitcases',
  },
  {
    id: 'bags',
    image: '/category2.avif',
    label: 'See all Bags',
    href: '/bags',
  },
  {
    id: 'accessories',
    image: '/category3.avif',
    label: 'See all Accessories',
    href: '/accessories',
  },
  {
    id: 'collections',
    image: '/category4.avif',
    label: 'See all Specialties',
    href: '/collections',
  },
];
