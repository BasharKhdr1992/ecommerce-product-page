import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Divider from './Divider';
import './CartDropdown.css';
import CartItem from './CartItem';
import CenteredContainer from '../UI/CenteredContainer';
import Button from './../UI/Button';

const CartDropdown = () => {
  const { cart } = useContext(CartContext);

  const RenderCartContent = () => {
    const btnStyle = {
      width: '100%',
      padding: '0.7rem 3rem',
      marginLeft: '0',
      marginTop: '1.5rem',
    };

    if (cart.length === 0) {
      return (
        <CenteredContainer>
          <p className="empty-cart-message">Your cart is empty</p>
        </CenteredContainer>
      );
    }

    return (
      <>
        {cart.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
        <Button type={'btn-primary'} extra={btnStyle}>
          <span className="btn-text">Check out</span>
        </Button>
      </>
    );
  };
  return (
    <div className="dropdown">
      <h4>Cart</h4>
      <Divider />
      <RenderCartContent />
    </div>
  );
};

export default CartDropdown;
