import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    search: searchSlice,
  },
});
