export type ProductColor = {
  id: string;
  hex: string;
  label: string;
};

export type IconicProduct = {
  id: string;
  name: string;
  image: string;
  colors: ProductColor[];
  defaultColorId: string;
  moreColors?: number;
};

export const iconicProducts: IconicProduct[] = [
  {
    id: 'essential-lite-kids',
    name: 'Essential Lite Cabin U Kids Edition',
    image:
      'https://images.unsplash.com/photo-1636771356327-520aa520cf09?w=800&q=80',
    colors: [
      { id: 'matcha', hex: '#c4d97a', label: 'Matcha' },
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
      { id: 'white', hex: '#f5f5f5', label: 'White' },
    ],
    defaultColorId: 'matcha',
    moreColors: 7,
  },
  {
    id: 'essential-cabin',
    name: 'Essential Cabin',
    image:
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80',
    colors: [
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
      { id: 'silver', hex: '#c8c8c8', label: 'Silver' },
      { id: 'navy', hex: '#2c3e50', label: 'Navy' },
    ],
    defaultColorId: 'black',
    moreColors: 5,
  },
  {
    id: 'never-still-tote',
    name: 'Never Still Tote',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    colors: [
      { id: 'tan', hex: '#c4a574', label: 'Tan' },
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
      { id: 'burgundy', hex: '#6b2c3e', label: 'Burgundy' },
    ],
    defaultColorId: 'tan',
  },
  {
    id: 'never-still-backpack',
    name: 'Never Still Backpack',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    colors: [
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
      { id: 'graphite', hex: '#4a4a4a', label: 'Graphite' },
    ],
    defaultColorId: 'black',
    moreColors: 3,
  },
  {
    id: 'original-cabin',
    name: 'Original Cabin',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    colors: [
      { id: 'silver', hex: '#c8c8c8', label: 'Silver' },
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
    ],
    defaultColorId: 'silver',
  },
  {
    id: 'classic-trunk',
    name: 'Classic Trunk Plus',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9b70304?w=800&q=80',
    colors: [
      { id: 'silver', hex: '#c8c8c8', label: 'Silver' },
      { id: 'black', hex: '#1a1a1a', label: 'Black' },
      { id: 'gold', hex: '#d4af37', label: 'Gold' },
    ],
    defaultColorId: 'silver',
    moreColors: 2,
  },
];
