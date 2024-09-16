import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const initialState = {
  searchData: {},
  searchQuery: "",
  status: STATUS.IDLE,
};

export const fetchProductByInput = createAsyncThunk(
  "search/products",
  async (input) => {
    const searchResponse = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    const { products } = await searchResponse.json();
    return products;
  }
);

const searchProductSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchData = {};
      state.searchQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductByInput.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchProductByInput.fulfilled, (state, { payload }) => {
      state.searchData = payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchProductByInput.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { setSearchQuery, clearSearch } = searchProductSlice.actions;
export default searchProductSlice.reducer;
