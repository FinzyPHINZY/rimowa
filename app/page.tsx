import Categories from './components/categories';
import Discover from './components/discover';
import Explore from './components/explore';
import HeroSection from './components/hero';
import IconicProducts from './components/iconic';
import Visit from './components/visit';

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <HeroSection />
      <IconicProducts />
      <Categories />
      <Explore />
      <Discover />
      <Visit />
    </div>
  );
}
