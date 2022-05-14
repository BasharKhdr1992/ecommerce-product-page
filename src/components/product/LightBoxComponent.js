import React, { useState, useContext } from 'react';
import './LightBoxComponent.css';
import { ModalContext } from '../../context/ModalContext';
import { assets } from '../../assets';
import Previous from './../svgs/Previous';
import Next from './../svgs/Next';
import { useWindowSize } from './../../custom-hooks/useWindowSize';

const LightBoxComponent = ({ isInsideModal }) => {
  const {
    modals: { lightboxModal, currentImgIndex },
    openLightboxModal,
  } = useContext(ModalContext);
  const [imgIndex, setImgIndex] = useState(currentImgIndex);

  const [width] = useWindowSize();

  const updateImage = (index) => {
    setImgIndex(index);
  };

  const next = () => {
    setImgIndex((prev) => {
      if (prev === assets.productImages.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const previous = () => {
    setImgIndex((prev) => {
      if (prev === 0) {
        return assets.productImages.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="product-img-container">
      <img
        src={assets.productImages[imgIndex]}
        className="product-img"
        onClick={() => {
          if (width > 720) {
            openLightboxModal(imgIndex);
          }
        }}
        alt={`product img ${imgIndex + 1}`}
      />
      {((lightboxModal && isInsideModal) || width < 720) && (
        <>
          <button className="next" onClick={next}>
            <Next />
          </button>
          <button className="previous" onClick={previous}>
            <Previous />
          </button>
        </>
      )}
      <div className="thumbnails">
        {assets.productThumbnails.map((thumbnail, index) => {
          return (
            <div
              className="thumbnail-container"
              key={index}
              onClick={() => updateImage(index)}
            >
              {imgIndex === index && (
                <div
                  className={`thumbnail-overlay ${
                    imgIndex === index ? 'thumbnail-active-overlay' : undefined
                  } `}
                />
              )}
              <img
                src={thumbnail}
                className={`thumbnail`}
                alt={`product thumbnail ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightBoxComponent;
