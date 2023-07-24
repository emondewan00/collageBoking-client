import React from "react";
import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "./image";
import "./image.css";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));
const Gallary = () => {
  return (
    <div className="bg-blue-50 py-20">
      <h1 className="text-4xl mb-6 text-center ">Gallery</h1>
      <div className=" max-w-4xl mx-auto">
        <Gallery images={images} enableImageSelection={false} />
      </div>
    </div>
  );
};

export default Gallary;
