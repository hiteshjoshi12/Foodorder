import React from "react";
import { imgurl } from "./Config";

const Restromenucard = ({name, locality,city,avgRating,costForTwoMessage,cloudinaryImageId}) => {
  return (
    <>
      <div className="menu-card-outer">
        <div className="menu-card-inner">
          {/* <h1>id {resid}</h1> */}
          <img src={imgurl + cloudinaryImageId}  alt="logo"/>
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <h3>{city}</h3>
          <h3>{avgRating} ⭐</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
    </>
  );
};

export default Restromenucard;
