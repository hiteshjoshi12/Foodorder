import React, { useState, useEffect } from "react";
import Restrocard from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "/index.css"
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const [allrestro, setAllRestro] = useState([]);
  const [filteredrestrorent, setFilteredRestrorent] = useState([]);
  const [searchtxt, setSearchTxt] = useState("");

  useEffect(() => {
    getrestro();
  }, []);

  async function getrestro() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4549833&lng=77.0387868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestrorent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
     //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const isonline = useOnline();
  if(!isonline) {
    return <h2>Offline, please check your connection</h2>
  }

  return allrestro.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search For Restaurants"
          value={searchtxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="submitbtn"
          onClick={() => {
            //need to filter the data
            const data = filterdata(searchtxt, allrestro);
            //update the state - restrorent
            setFilteredRestrorent(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="body">
        {filteredrestrorent.map((restro) => {
          return (
            <Link
              className="link"
              to={"/restro/" + restro.info.id}
              key={restro.info.id}
            >
              <Restrocard {...restro.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
