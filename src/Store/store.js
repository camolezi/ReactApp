import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Slices/loginSlice.js";
import postReducer from "./Slices/postSlice.js";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
  },
});
