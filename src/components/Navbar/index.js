import React, { useState, useContext } from 'react';
import logo from '../../images/logo.svg';
import iconCart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import './index.css';
import CartDropdown from './CartDropdown';
import { CartContext } from './../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';
import { assets } from '../../assets';

const Index = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const { cart } = useContext(CartContext);
  const { openMobileNavbar } = useContext(ModalContext);

  const itemsCount = cart
    .map((product) => product.count)
    .reduce((acc, current) => acc + current, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          onClick={openMobileNavbar}
          src={assets.hamburger}
          alt={'icon hamburger'}
          className="img-navlink hamburger mobile"
        />
        <div className="img-navlink logo">
          <img src={logo} alt="sneakers" />
        </div>
      </div>
      <div className="collapse">
        <button className="navlink">Collections</button>
        <button className="navlink">Men</button>
        <button className="navlink">Women</button>
        <button className="navlink">About</button>
        <button className="navlink">Contact</button>
      </div>
      <div className="navbar-right">
        <div
          className="img-navlink cart"
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <img src={iconCart} alt="cart" />
          {cart.length > 0 && <div className="cart-count">{itemsCount}</div>}
        </div>
        {isDropdown && <CartDropdown />}
        <div className="img-navlink avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Index;
