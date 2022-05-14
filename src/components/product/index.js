import React, { useState, useContext } from 'react';
import { assets } from '../../assets';
import './index.css';
import Cart from '../svgs/Cart';
import { CartContext } from '../../context/CartContext';
import Button from './../UI/Button';
import LightBoxComponent from './LightBoxComponent';
const Index = () => {
  const [count, setCount] = useState(0);

  const { updateCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (count > 0) {
      updateCart({
        productName: 'Fall Limited Edition Sneakers',
        count,
        img: assets.productThumbnails[0],
        price: '$125.00',
      });
    }
  };

  return (
    <div className="product-page">
      <LightBoxComponent isInsideModal={false} />
      <div className="product-details">
        <p className="company-title">Sneaker Company</p>
        <h1 className="product-name">Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="pricing">
          <div className="actual-price-sale">
            <h2 className="actual-price">$125.00</h2>
            <span className="sale">50%</span>
          </div>
          <h4 className="original-price">$250.00</h4>
        </div>
        <div className="add-to-cart">
          <div className="plus-minus-container">
            <button
              className="plus"
              onClick={() => setCount((prev) => prev + 1)}
            >
              <img src={assets.plus} alt="plus icon" />
            </button>
            <div className="count">{count}</div>
            <button
              className="minus"
              onClick={() => setCount((prev) => Math.max(0, prev - 1))}
            >
              <img src={assets.minus} alt="minus icon" />
            </button>
          </div>
          <Button type={'btn-primary'} onClick={handleAddToCart}>
            <Cart />
            <span className="btn-text">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
