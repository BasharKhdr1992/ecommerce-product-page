import React, { useContext } from 'react';
import { assets } from '../../assets';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ product }) => {
  const totalCost = `$${+product.price.replace('$', '') * product.count}`;

  const { deleteItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img
        src={product.img}
        className="cart-prod-img"
        alt={product.productName}
      />
      <div className="product-info">
        <p className="name">{product.productName}</p>
        <p className="cost">
          {`${product.price} x ${product.count}`}
          <span className="total-cost">{totalCost}</span>
        </p>
      </div>
      <img
        src={assets.iconDelete}
        className="icon-delete"
        alt={'icon delete'}
        onClick={() => deleteItem(product.id)}
      />
    </div>
  );
};

export default CartItem;
