import React from "react";
import "./bike-location.css";

//Display information about specific bike stations
export const BikeLocation = ({ name, free_bikes, empty_slots, timestamp }) => {
  return (
    <div className="location-flex">
      <p className="header">{name}</p>
      <div className="bike-stats">
        <div className="free-bikes">
          <h2>{free_bikes}</h2>
          <p>Free Bikes</p>
        </div>
        <div className="Empty Slots">
          <h2>{empty_slots}</h2>
          <p>Empty Slots</p>
        </div>
      </div>
      <p className="footer">{timestamp}</p>
    </div>
  );
};
