import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const find = state.cart.find((s) => s._id === action.payload);
      const index = state.cart.indexOf(find);
      state.quantity -= 1;
      state.total -= state.cart[index].price * state.cart[index].quantity;
      state.cart.splice(index, 1);
    },
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cart.actions;
export default cart.reducer;
