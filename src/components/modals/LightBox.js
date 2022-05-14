import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import LightBoxComponent from '../product/LightBoxComponent';
import Close from '../svgs/Close';
import './LightBox.css';

const LightBox = () => {
  const { closeLightboxModal } = useContext(ModalContext);

  return (
    <div className="lightbox-modal">
      <div className="icon-close-container" onClick={closeLightboxModal}>
        <Close />
      </div>
      <LightBoxComponent isInsideModal={true} />
    </div>
  );
};

export default LightBox;
