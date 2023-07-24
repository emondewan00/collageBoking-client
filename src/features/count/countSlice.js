import { createSlice } from "@reduxjs/toolkit";

const state = {
  count: 0,
};

export const countSlice = createSlice({
  name: "countSlice",
  initialState: state,
  reducers: {
    increaseCounnt: (state) => {
      state.count++;
    },
    decreaseCounnt: (state) => {
      state.count--;
    },
  },
});

export const { increaseCounnt, decreaseCounnt } = countSlice.actions;
