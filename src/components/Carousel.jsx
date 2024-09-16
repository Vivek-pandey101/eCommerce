import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5;

  const nextSlide = () => {
    if (currentIndex + itemsPerSlide < products.length) {
      setCurrentIndex(currentIndex + itemsPerSlide);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerSlide >= 0) {
      setCurrentIndex(currentIndex - itemsPerSlide);
    }
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <div className={styles.CarouselContainer}>
      <button className={styles.leftArr} onClick={prevSlide}>&larr;</button>
      <div className={styles.CarouselInner}>
        {visibleProducts.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className={styles.card}
          >
            <img
              className={styles.carouselImages}
              src={product.thumbnail}
              alt={product.title}
            />
          </Link>
        ))}
      </div>
      <button className={styles.rightArr} onClick={nextSlide}>&rarr;</button>
    </div>
  );
};

export default Carousel;
