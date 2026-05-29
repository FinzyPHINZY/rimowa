/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
'use client';

import './embla.css';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import type { IconicProduct } from '../data/iconicProducts';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './emblaCarouselArrow';
import ProductCard from './productCard';

type EmblaCarouselProps = {
  products: IconicProduct[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = ({ products, options }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla iconic-embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product) => (
            <div className="embla__slide" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label="Previous products"
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        aria-label="Next products"
      />
    </div>
  );
};

export default EmblaCarousel;
