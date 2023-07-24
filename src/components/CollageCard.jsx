import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";

const CollageCard = ({ collage = {} }) => {
  const { collageName, admissionDate, research, event, _id } = collage;
  return (
    <div className="card card-compact max-w-xs bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collageName}</h2>
        <p>
          Admission Date: {moment(admissionDate).format("MMM Do YY")}{" "}
        </p>
        <ul className="grid grid-cols-2">
          <li>
            Research:{"  "} {research.length}
          </li>
          <li>Event: {event.length} </li>
          <li>Sports:</li>
        </ul>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollageCard;
