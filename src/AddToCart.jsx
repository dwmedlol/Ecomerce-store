import React from 'react';

function AddToCart({ quantity, setQuantity }) {
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <div className="add-to-cart">
      <div className="quantity-selector">
        <button 
          className="quantity-button"
          onClick={decrementQuantity}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button 
          className="quantity-button"
          onClick={incrementQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button className="add-to-cart-button">
        🛒 Add to cart
      </button>
    </div>
  );
}

export default AddToCart;