import { createSlice } from "@reduxjs/toolkit";
import { sortOption } from "../../constants";

const initialState = {
  searchValue: "",
  pageNumber: 1,
  order: sortOption[1],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setSearch, setPageNumber, setOrder } = searchSlice.actions;

export default searchSlice.reducer;
