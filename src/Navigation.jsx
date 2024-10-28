import React from 'react';

function Navigation({ isOpen }) {
  const navClass = `navigation ${isOpen ? 'open' : ''}`;
  
  return (
    <nav className={navClass}>
      <a href="#collections">Collections</a>
      <a href="#men">Men</a>
      <a href="#women">Women</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;