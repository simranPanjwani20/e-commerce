import React, { useState, useEffect } from 'react';
import './style.css';

const Slider = (props) => {
  const images=props.images
 
  //manage image slider
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  const goToImage = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
    <div className="sliderCar">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slidecar ${index === currentSlide ? 'activecar' : ''}`}
        >
          <img src={image} alt={`Imagecar ${index + 1}`} />
        </div>
      ))}
            
    </div>
    <div className="dotscar">
    {images.map((_, index) => (
      <span
        key={index}
        className={index === currentSlide ? 'dotcar activecar' : 'dotcar'}
        onClick={() => goToImage(index)}
      ></span>
    ))}
  </div>
  </>
  );
};

export default Slider;
