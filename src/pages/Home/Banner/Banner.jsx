import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CollageCard from "../../../components/CollageCard";

const Banner = () => {
  const { register, handleSubmit } = useForm();
  const [collage, setCollage] = useState([]);
  const onSubmit = async (data) => {
    const result = await axios.get(
      `https://collage-server-miremon5222-gmailcom.vercel.app/collages/single?collageName=${data.search}`
    );
    setCollage(result.data);
  };
  console.log(collage[0], "collage");
  return (
    <div className="min-h-[80vh] bg-gray-200 grid grid-cols-1 md:grid-cols-2 items-center justify-center px-10">
      <div>
        <h1 className="text-4xl"> Your Dream Collage</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("search")}
            placeholder="Collage Name"
            className="input input-bordered input-primary w-full max-w-xs my-2"
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Serch" />
        </form>
      </div>
      <div className="">{collage.length > 0 && <CollageCard collage={collage[0]} />}</div>
    </div>
  );
};

export default Banner;
