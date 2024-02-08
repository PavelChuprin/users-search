import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TUser = {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
};

interface IUserSliceState {
  users: TUser[];
  total_count: number;
}

const initialState: IUserSliceState = {
  users: [],
  total_count: 0,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TUser[]>) => {
      state.users = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.total_count = action.payload;
    },
  },
});

export const { setUsers, setTotalCount } = usersSlice.actions;

export default usersSlice.reducer;
