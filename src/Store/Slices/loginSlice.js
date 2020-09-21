import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  username: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },

    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default loginSlice.reducer;

export const { updateToken, updateUsername } = loginSlice.actions;

export const selectToken = (state) => state.login.token;
export const selectUsername = (state) => state.login.username;
