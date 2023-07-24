import apiSlice from "../api/apiSlice";
const collageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollageName: builder.query({ query: () => "/collages/collagesName" }),
    getCollages: builder.query({ query: () => "/collages" }),
    getCollage: builder.query({ query: (id) => `/collages/${id}` }),
   
  }),
});

export const {
  useGetCollageNameQuery,
  useGetCollagesQuery,
  useGetCollageQuery,
} = collageApi;
