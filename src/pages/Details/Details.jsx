import React from "react";
import { useParams } from "react-router-dom";
import { useGetCollageQuery } from "../../features/collage/collage";
import moment from "moment";

const Details = () => {
  const { id } = useParams();
  const { data: collage = [] } = useGetCollageQuery(id);
  const {
    image,
    admissionDate,
    admissionProcess,
    collageName,
    event,
    research,
    sports,
  } = collage;
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <h1 className="card-title">{collageName}</h1>
        <p>Admission Date:{moment(admissionDate).format("MMM Do YY")}</p>
        <p>Admission Process: {admissionProcess}</p>
        <div>
          <h1 className="text-xl">Events</h1>
          {event?.map((evn) => (
            <div key={evn._id}>
              <h1 className="text-lg"> {evn.topic}</h1>
              <p>{evn.details}</p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl">Research</h1>
          {research?.map((evn) => (
            <div key={evn._id}>
              <h1 className="text-lg"> {evn.topic}</h1>
              <p>{evn.details}</p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl">Sports</h1>
          {sports?.map((evn) => (
            <div key={evn._id}>
              <h1 className="text-lg"> {evn.sport}</h1>
              <p>{evn.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
