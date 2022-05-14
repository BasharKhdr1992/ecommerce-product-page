import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Product from './components/product';
import './App.css';
import { ModalContext } from './context/ModalContext';
import LightBox from './components/modals/LightBox';
import MobileNavbarModal from './components/modals/MobileNavbarModal';

const App = () => {
  const { modals } = useContext(ModalContext);

  return (
    <div className="wrapper">
      {modals.lightboxModal && <LightBox />}
      {modals.mobileNavbarModal && <MobileNavbarModal />}
      <Navbar />
      <Product />
    </div>
  );
};

export default App;
