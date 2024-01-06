import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  pageNumber: 1,
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
  },
});

export const { setSearch, setPageNumber } = searchSlice.actions;

export default searchSlice.reducer;
