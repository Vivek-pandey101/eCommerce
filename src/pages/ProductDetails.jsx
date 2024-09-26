import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const {
    title,
    description,
    price,
    discountPercentage,
    category,
    brand,
    thumbnail,
    reviews = [],
    dimensions,
    stock,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
  } = useSelector((state) => state.details.productDetails || {});

  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <img src={thumbnail} alt={title} />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{title}</h1>
          <p className={styles.productDescription}>{description}</p>
          <div className={styles.productPricing}>
            <span className={styles.price}>${price}</span>
            <span className={styles.discount}>({discountPercentage}% off)</span>
          </div>
          <p className={styles.category}>
            <strong>Category:</strong> {category}
          </p>
          <p className={styles.brand}>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Availability:</strong> {availabilityStatus} ({stock} left)
          </p>
          <p>
            <strong>Shipping Info:</strong> {shippingInformation}
          </p>
          {dimensions ? (
            <p>
              <strong>Dimensions:</strong> {dimensions.width} x{" "}
              {dimensions.height} x {dimensions.depth} cm
            </p>
          ) : (
            <p>
              <strong>Dimensions:</strong> Not available
            </p>
          )}
          <p>
            <strong>Return Policy:</strong> {returnPolicy}
          </p>
        </div>
      </div>

      <div className={styles.reviewsContainer}>
        <h2>Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <p className={styles.reviewerName}>
                <strong>{review.reviewerName}</strong>
              </p>
              <p className={styles.reviewRating}>Rating: {review.rating}/5</p>
              <p className={styles.reviewComment}>"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
