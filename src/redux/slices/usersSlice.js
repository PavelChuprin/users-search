import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  total_count: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setTotalCount: (state, action) => {
      state.total_count = action.payload;
    },
  },
});

export const { setUsers, setTotalCount } = usersSlice.actions;

export default usersSlice.reducer;
