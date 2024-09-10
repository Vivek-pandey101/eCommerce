import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByInput,
  setSearchQuery,
  clearSearch,
} from "../app/features/searchQuery";
import { fetchProductDetails } from "../app/features/detailsSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const input = useSelector((state) => state.search.searchQuery); // Use global search query
  const products = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (input) {
      dispatch(fetchProductByInput(input));
    } else {
      dispatch(clearSearch()); // Clear search results if input is empty
    }
  }, [input, dispatch]);

  // Clear search results when navigating to a different page
  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  const showProductDetails = (id) => {
    dispatch(fetchProductDetails(id));
  };

  return (
    <>
      <div className={styles.HeaderContainer}>
        <h2>myLogo</h2>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.inputArea}>
          <input
            type="search"
            placeholder="Type here to search for products..."
            onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Set global search query
            value={input}
          />
        </div>
        {input && products.length > 0 && (
          <div className={styles.searchResults}>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/details/${product.id}`}
                    onClick={() => showProductDetails(product.id)}
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/cart">
          Cart <span className={styles.counter}>0</span>
        </Link>
      </div>
      <div className={styles.logo}>
        <div className={styles.showSidebar} onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 className={styles.logo}>myLogo</h2>
      </div>
      {show && (
        <>
          <div className={styles.inputArea2}>
            <input
              type="search"
              placeholder="Type here to search for products..."
              onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Set global search query
              value={input}
            />
            <Link onClick={() => setShow(!show)} to="/">
              Home
            </Link>
            <Link onClick={() => setShow(!show)} to="/cart">
              Cart <span className={styles.counter}>0</span>
            </Link>
          </div>
          <div className={styles.sideBar} onClick={() => setShow(!show)}></div>
        </>
      )}
    </>
  );
};

export default Header;
