import React from "react";
import { useGetCollagesQuery } from "../../features/collage/collage";
import CollageCard from "../../components/CollageCard";

const Collages = () => {
  const { data = [] } = useGetCollagesQuery();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {data.map((collage) => (
        <CollageCard key={collage._id} collage={collage} />
      ))}
    </div>
  );
};

export default Collages;
