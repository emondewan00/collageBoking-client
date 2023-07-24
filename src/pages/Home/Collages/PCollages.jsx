import React from "react";
import CollageCard from "../../../components/CollageCard";
import { useGetCollagesQuery } from "../../../features/collage/collage";
const PCollages = () => {
  const { data: collages = [] } = useGetCollagesQuery();
  const threeCollages = collages.slice(0, 3);
  console.log(threeCollages);
  return (
    <div className=" py-10">
      <h1 className=" text-center text-4xl mb-5">Popular Three Collages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 justify-items-center md:gap-x-5 px-4">
        {threeCollages.map((collage) => (
          <CollageCard key={collage._id} collage={collage} />
        ))}
      </div>
    </div>
  );
};

export default PCollages;
