import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const updateCart = (product) => {
    setCart((prev) => [...prev, { ...product, id: uuidv4() }]);
  };

  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, deleteItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
