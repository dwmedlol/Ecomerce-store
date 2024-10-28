'use client'

import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="menu-button mobile-only"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <h1 className="logo">sneakers</h1>
        <Navigation isOpen={isMenuOpen} />
      </div>
      <div className="header-right">
        <button className="cart-button" aria-label="Shopping cart">
          🛒
        </button>
        <div className="avatar">
          <img 
            src="/avatar-placeholder.png" 
            alt="User avatar" 
            className="avatar-image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
