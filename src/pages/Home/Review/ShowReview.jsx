import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useGetReivewQuery } from "../../../features/review/review";

const ShowReview = () => {
  const { data: reviews = [] } = useGetReivewQuery();
  console.log(reviews, "revies");
  return (
    <div>
      <h1 className="text-3xl mb-4">Students Reviews</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-gray-100  rounded w-96  shadow-2xl">
              <div className="card-body text-start">
                <h2 className="card-title">{review.name}</h2>
                <p>Collage Name:{review.collageName}</p>
                <p>{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShowReview;
