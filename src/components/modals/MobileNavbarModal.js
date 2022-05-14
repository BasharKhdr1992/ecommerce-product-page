import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import './MobileNavbarModal.css';
import Close from './../svgs/Close';

const MobileNavbarModal = () => {
  const { closeMobileNavbar } = useContext(ModalContext);

  return (
    <div className="mobile-navbar-modal">
      <div className="mobile-navbar">
        <div className="m-icon-close-container" onClick={closeMobileNavbar}>
          <Close />
        </div>
        <button className="mobile-navlink">Collections</button>
        <button className="mobile-navlink">Men</button>
        <button className="mobile-navlink">Women</button>
        <button className="mobile-navlink">About</button>
        <button className="mobile-navlink">Contact</button>
      </div>
    </div>
  );
};

export default MobileNavbarModal;
