import React from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/CartContext';

import App from './App';
import { ModalProvider } from './context/ModalContext';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ModalProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ModalProvider>
);
