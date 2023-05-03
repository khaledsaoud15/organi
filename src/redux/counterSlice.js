import { createSlice } from "@reduxjs/toolkit";

const countrSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
  },
});

export const { inc, dec } = countrSlice.actions;
export default countrSlice.reducer;
