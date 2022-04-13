import React, { useState } from 'react';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg'
import styles from './carousel.module.css'

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
    <section className={styles.slider}>
      <img src={leftArrow} className={styles.leftArrow} onClick={prevSlide} />
      {sliders.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='diapo des logements'/>
            )}
          </div>
        );
      })}
      <img src={rightArrow} className={styles.rightArrow} onClick={nextSlide} />
    </section>
  );
}

export default Carousel