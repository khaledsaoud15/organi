import { createSlice } from "@reduxjs/toolkit";

const liked = createSlice({
  name: "liked",
  initialState: {
    like: [],
  },

  reducers: {
    addLiked: (state, action) => {
      state.like.push(action.payload);
    },
    removeLiked: (state, action) => {
      const index = state.like.findIndex((s) => s.id === action.payload);
      state.like.splice(index, 1);
    },
  },
});

export const { addLiked, removeLiked } = liked.actions;
export default liked.reducer;
