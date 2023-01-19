import React from 'react';
import "./YourLocation.css";
import map from "./pages/Images/Map.png";

function YourLocation() {
  return (
    <>
      <div className="interests" style={{ fontFamily: "outfit" }}>
        Your Location
      </div>
      <img classname="interests" src={map} alt='images' style={{ maxWidth: "100%" }} />


    </>
  )
}

export default YourLocation;