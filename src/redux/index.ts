import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import searchSlice from "./slices/searchSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
