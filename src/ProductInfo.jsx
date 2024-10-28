import React, { useState } from 'react';
import PriceInfo from './PriceInfo';
import AddToCart from './AddToCart';

function ProductInfo() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-info">
      <h2 className="company-name">SNEAKER COMPANY</h2>
      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, they'll withstand everything 
        the weather can offer.
      </p>
      <PriceInfo />
      <AddToCart 
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default ProductInfo;