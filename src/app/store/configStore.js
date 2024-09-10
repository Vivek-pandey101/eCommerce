import { configureStore } from "@reduxjs/toolkit";
import apiProduct from "../features/reduxSlice";
import addProduct from "../features/cartSlice";
import countProduct from "../features/counterSlce";
import searchProduct from "../features/searchQuery";
import productDetails from "../features/detailsSlice";

export const store = configureStore({
  reducer: {
    product: apiProduct,
    cartProduct: addProduct,
    counter: countProduct,
    search: searchProduct,
    details: productDetails,
  },
});
