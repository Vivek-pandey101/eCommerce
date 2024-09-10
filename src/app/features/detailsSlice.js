import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const initialState = {
  productDetails: {},
  status: STATUS.IDLE,
};

export const fetchProductDetails = createAsyncThunk(
  "products/details",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    return product;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
      state.productDetails = payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchProductDetails.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const {} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
