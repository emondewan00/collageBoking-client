import React from "react";
import Banner from "../Banner/Banner";
import PCollages from "../Collages/PCollages";
import Gallary from "../Gallary/Gallary";
import Research from "../Research/Research";
import Review from "../Review/Review";
import ShowReview from "../Review/ShowReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <PCollages />
      <Gallary />
      <Research />
      <Review/>
    </div>
  );
};

export default Home;
