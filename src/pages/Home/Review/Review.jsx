import React from "react";
import { useGetCollageNameQuery } from "../../../features/collage/collage";
import { Controller, useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useAddReviewMutation } from "../../../features/review/review";
import ShowReview from "./ShowReview";

const Review = () => {
  const { data: collageName = [] } = useGetCollageNameQuery();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      collageName: "",
      rating: 0,
    },
  });
  const [addReview, result] = useAddReviewMutation();

  function onSubmit(data) {
    // alert(JSON.stringify(data, undefined, 2));
    addReview(data);
    reset();
  }
  return (
    <div className="py-10 grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-4 gap-x-4 items-center ">
      <div className="col-span-2">
        <ShowReview />
      </div>
      <div className="col-span-1 px-10 md:px-0">
        <h1 className="text-xl font-semibold">Write a Review</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div className="flex gap-x-4 mt-2">
            <span>Rating us</span>
            <Controller
              control={control}
              name="rating"
              rules={{
                validate: (rating) => rating > 0,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rating
                  style={{ maxWidth: 120 }}
                  value={value}
                  isRequired
                  onChange={onChange}
                  visibleLabelId="rating_label"
                  onBlur={onBlur}
                />
              )}
            />
          </div>

          <select
            className=" border px-4 py-1 border-gray-400 focus:outline-primary-focus"
            {...register("collageName", { required: true })}
            defaultValue=""
          >
            <option disabled value="">
              Select a Collage
            </option>
            {collageName?.map((collage) => (
              <option value={collage.collageName} key={collage._id}>
                {collage.collageName}
              </option>
            ))}
          </select>
          <input
            type="text"
            {...register("name", { required: true })}
            className=" border px-4 py-1 border-gray-400 focus:outline-primary-focus"
            placeholder="Name"
          />
          <input
            type="email"
            {...register("userEmail", { required: true })}
            className=" border px-4 py-1 border-gray-400 focus:outline-primary-focus"
            placeholder="email"
          />
          <textarea
            className=" border px-4 py-1 border-gray-400 focus:outline-primary-focus"
            {...register("review", { required: true })}
            cols="30"
            rows="3"
            placeholder="Your Review"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-700 text-white py-2  rounded text-lg"
          >
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
