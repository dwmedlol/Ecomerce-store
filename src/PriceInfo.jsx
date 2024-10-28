import React from 'react';

function PriceInfo() {
  return (
    <div className="price-info">
      <div className="current-price-container">
        <span className="current-price">$125.00</span>
        <span className="discount-badge">50%</span>
      </div>
      <span className="original-price">$250.00</span>
    </div>
  );
}

export default PriceInfo;