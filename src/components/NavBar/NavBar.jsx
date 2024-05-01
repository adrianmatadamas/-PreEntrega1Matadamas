import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logoImage from './assets/logo.png';

function Navbar() {
  return (
    <>
    <div className="navbar-container">
    <img src={logoImage} style={{ width: '500px', height: '100px' }} />
      <div className="navbar-items">
        <nav className="navbar">
          <ul className="navbar-list">
            <li><a href="#soportes para laptop">Soportes para laptop</a></li>
            <li><a href="#soportes de escritorio">Soportes de escritorio</a></li>
            <li><a href="#mobiliario">Mobiliario</a></li>
            <li><a href="#Computadoras de escritorio">Computadoras de escritorio</a></li>
            <li><a href="#laptops">Laptops</a></li>
          </ul>
        </nav>
        
      </div>
      <CartWidget />
    </div>
    </>
  );
}

export default Navbar;
