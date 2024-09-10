import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      state.cartItem.push(product);
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
