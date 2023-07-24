import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collage-server-miremon5222-gmailcom.vercel.app/",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
