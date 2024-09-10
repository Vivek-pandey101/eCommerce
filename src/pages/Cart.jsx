import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../app/features/counterSlce";
import { removeProduct } from "../app/features/cartSlice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cartProduct.cartItem);
  // console.log(cartProduct);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
    dispatch(decrement());
  };

  return (
    <div className={styles.CartContainer}>
      <ul>
        {cartProduct.length === 0 ? (
          <div>
            <h1>The Cart is Empty:</h1>
            <h4>Add item to see the cart</h4>
          </div>
        ) : (
          cartProduct.map((item) => {
            return (
              <li>
                <div style={{ display: "flex", gap: "20px" }}>
                  <img
                    className={styles.image}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
                <div className={styles.buyNow}>
                  <button className={styles.buy}>Buy Now</button>
                  <abbr title="Remove From Cart">
                    <button
                      className={styles.buy}
                      onClick={()=>handleRemove(item.id)}
                    >
                      X
                    </button>
                  </abbr>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Cart;
