import apiSlice from "../api/apiSlice";
const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReivew: builder.query({ query: () => "/reviews" }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "reviews",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetReivewQuery, useAddReviewMutation } = reviewApi;
