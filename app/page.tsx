import HeroSection from './components/hero';
import IconicProducts from './components/iconic';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <HeroSection />
      <IconicProducts />
    </div>
  );
}
