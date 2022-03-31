import React, { useState } from 'react';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg'

function Carousel({sliders}) {
  const [current, setCurrent] = useState(0);
  const length = sliders.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliders) || sliders.length <= 0) {
    return null;
  }

  return (
    <section className='sliders'>
      <img src={leftArrow} className='left-arrow' onClick={prevSlide} />
      <img src={rightArrow} className='right-arrow' onClick={nextSlide} />
      {sliders.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;