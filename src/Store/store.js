import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Slices/loginSlice.js";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
