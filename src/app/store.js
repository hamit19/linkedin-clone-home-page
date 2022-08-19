import { configureStore } from "@reduxjs/toolkit";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user,
  },
});
