import Categories from './components/categories';
import Discover from './components/discover';
import Explore from './components/explore';
import Footer from './components/footer';
import HeroSection from './components/hero';
import IconicProducts from './components/iconic';
import Newsletter from './components/newsletter';
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
      <Newsletter />
      <Footer />
    </div>
  );
}
