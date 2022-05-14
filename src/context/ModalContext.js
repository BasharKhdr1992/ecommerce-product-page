import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modals, setModals] = useState({
    lightboxModal: false,
    mobileNavbarModal: false,
    currentImgIndex: 0,
  });

  const openLightboxModal = (currentImgIndex) => {
    setModals((prev) => {
      return { ...prev, lightboxModal: true, currentImgIndex };
    });
  };

  const closeLightboxModal = () => {
    setModals((prev) => {
      return { ...prev, lightboxModal: false };
    });
  };

  const openMobileNavbar = () => {
    setModals((prev) => {
      return { ...prev, mobileNavbarModal: true };
    });
  };

  const closeMobileNavbar = () => {
    setModals((prev) => {
      return { ...prev, mobileNavbarModal: false };
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modals,
        openLightboxModal,
        closeLightboxModal,
        openMobileNavbar,
        closeMobileNavbar,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
