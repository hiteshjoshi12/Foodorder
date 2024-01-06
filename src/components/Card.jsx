import React from "react";
import { imgurl } from "./Config";

const Restrocard = ({ name, cloudinaryImageId, cuisines, locality, areaName, avgRating, deliveryTime }) => {
    return (
      <div className="mx-auto" >
        <img src={imgurl + cloudinaryImageId} alt="logo" />
        <h3>{name}</h3>
        <h5> ⭐ {avgRating} {deliveryTime} mins</h5>
        <h5>{cuisines.slice(0, 2).join(", ")}</h5>
        <h5>{locality} </h5>
        <h6>{areaName} </h6>
        
      </div>
    );
  };
  export default Restrocard;