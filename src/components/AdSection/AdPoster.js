import React from "react";
import "./AdPoster.css";
let poster = require("../../assets/shoeposter.jpg");

const AdPoster = () => {
  return (
    <div className="adPoster my-5 d-flex justify-content-center">
      <img
        className="img-fluid w-100"
        style={{ borderRadius: "5px" }}
        src={poster}
        alt="abcd"
      />
    </div>
  );
};
export default AdPoster;
