import EmblaCarousel from './emblaCarousel';
import { iconicProducts } from '../data/iconicProducts';

const IconicProducts = () => {
  return (
    <section className="iconic-section w-full py-10">
      <h3 className="mt-0 mb-6 ml-10 text-left text-xs font-normal uppercase leading-normal tracking-[0.18em] text-[#0d0900]">
        iconic products
      </h3>
      <EmblaCarousel products={iconicProducts} />
    </section>
  );
};

export default IconicProducts;
