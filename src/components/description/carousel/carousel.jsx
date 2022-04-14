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
      {length === 1 ? <div>
              <img src={sliders[current]} className={styles.current} alt='diapo des logements'/>
          </div> : <>
          <div className={styles.inside}>
              <img src={leftArrow} className={styles.leftArrow} onClick={prevSlide} />
              <img src={sliders[current]} className={styles.current} alt='diapo des logements'/>
              <img src={rightArrow} className={styles.rightArrow} onClick={nextSlide} />
          </div>
      </>}
      
    </section>
  );
}

export default Carousel