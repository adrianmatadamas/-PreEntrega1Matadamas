import React from 'react';
import cartImage from './assets/cart_widget.png';

const CartWidget = () => {
  return (
    <>
      <img src={cartImage} alt="Cart Widget" style={{ width: '50px', height: '50px' }} />
    </>
  );
};

export default CartWidget;
