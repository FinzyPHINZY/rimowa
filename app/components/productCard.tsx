'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { IconicProduct } from '../data/iconicProducts';

type ProductCardProps = {
  product: IconicProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedColorId, setSelectedColorId] = useState(product.defaultColorId);

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="product-card__image"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <div className="product-card__swatches">
          {product.colors.map((color) => (
            <button
              key={color.id}
              type="button"
              className={`product-card__swatch${
                selectedColorId === color.id
                  ? ' product-card__swatch--selected'
                  : ''
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.label}
              aria-pressed={selectedColorId === color.id}
              onClick={() => setSelectedColorId(color.id)}
            />
          ))}
          {product.moreColors ? (
            <span className="product-card__more">
              +{product.moreColors}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
