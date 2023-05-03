import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import likedSlice from "./likedSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    liked: likedSlice,
  },
});
