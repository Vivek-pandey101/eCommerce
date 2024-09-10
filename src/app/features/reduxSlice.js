import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUS.IDLE,
  searchData: [],
};

export const fetchData = createAsyncThunk("home/products", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return products;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
