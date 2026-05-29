import EmblaCarousel from './emblaCarousel';
import { iconicProducts } from '../data/iconicProducts';

const IconicProducts = () => {
  return (
    <section className="iconic-section mb-[120px] w-full">
      <h3 className="mt-0 mb-4 ml-10 text-left text-[10px] font-normal uppercase leading-6 tracking-[0.5px] text-[#0d0900]">
        iconic products
      </h3>
      <EmblaCarousel products={iconicProducts} />
    </section>
  );
};

export default IconicProducts;
