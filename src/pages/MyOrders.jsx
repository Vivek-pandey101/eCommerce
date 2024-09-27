import React from "react";
import styles from "./MyOrders.module.css";
import { useSelector } from "react-redux";

function MyOrders() {
  const orderProduct = useSelector((state) => state.orders.orderItem);  

  return <div className={styles.OrdersContiner}>
    {orderProduct.map((item)=>{
        return(
            <div className={styles.OneItem} key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.description}</p>
            </div>
        )
    })}
  </div>;
}

export default MyOrders;
