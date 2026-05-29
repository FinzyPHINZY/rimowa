import Categories from './components/categories';
import Explore from './components/explore';
import HeroSection from './components/hero';
import IconicProducts from './components/iconic';

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <HeroSection />
      <IconicProducts />
      <Categories />
      <Explore />
    </div>
  );
}
