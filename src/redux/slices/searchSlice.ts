import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SortOptionEnum {
  ASC = "asc",
  DESC = "desc",
}

export type Sort = {
  name: string;
  sortOption: SortOptionEnum;
};

export interface ISearchSliceState {
  searchValue: string;
  pageNumber: number;
  order: Sort;
}

const initialState: ISearchSliceState = {
  searchValue: "",
  pageNumber: 1,
  order: {
    name: "DESC",
    sortOption: SortOptionEnum.DESC,
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setOrder: (state, action: PayloadAction<Sort>) => {
      state.order = action.payload;
    },
  },
});

export const { setSearch, setPageNumber, setOrder } = searchSlice.actions;

export default searchSlice.reducer;
