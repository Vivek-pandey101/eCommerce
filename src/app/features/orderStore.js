import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItem: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProductToStore: (state, action) => {
      const product = action.payload;
      state.orderItem.push(product);
    },
    removeProductFromStore: (state, action) => {
      const id = action.payload;
      state.orderItem = state.orderItem.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

export const { addProductToStore, removeProductFromStore } = orderSlice.actions;

export default orderSlice.reducer;
