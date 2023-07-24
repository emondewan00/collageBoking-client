import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../features/count/countSlice";
import apiSlice from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    apiSlice: apiSlice.reducer,
    count: countSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
