import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/reduxSlice";
import Error from "../errorPage/Error";
import { addProduct } from "../app/features/cartSlice";
import { increment } from "../app/features/counterSlce";
import { fetchProductDetails } from "../app/features/detailsSlice";
import Carousel from "../components/Carousel";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchData());
    } catch (error) {
      console.log("Error", error.message);
    }
  }, []);

  const showProductDetails = (id) => {
    dispatch(fetchProductDetails(id));
  };

  const { data: products, status } = useSelector((state) => state.product);
  console.log(products);

  const loading = {
    width: "100%",
    color: "white",
    margin: "100px auto",
  };

  if (status == "loading") {
    return <h2 style={loading}>Loading....</h2>;
  }
  if (status == "error") {
    return <Error />;
  }

  const handleClick = (product) => {
    dispatch(addProduct(product));
    dispatch(increment());
  };

  return (
    <>
      <Carousel products={products} />
      <div className={styles.cardcontainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Link
              to={`/details/${product.id}`}
              onClick={() => showProductDetails(product.id)}
              className={styles.cardLink}
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className={styles.cardcontent}>
                <span className={styles.title}>{product.title}</span>
                <p className={styles.price}>${product.price}</p>
              </div>
            </Link>
            <button
              className={styles.addtocart}
              onClick={() => handleClick(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
