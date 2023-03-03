import React from "react";

import { adCarddata } from "../../config/adCardData";
import "./AdCards.css";

import { BsArrowRight } from "react-icons/bs";

const AdCards = () => {
  return (
    <div className="adCards row ">
      {adCarddata.map((poster) => (
        <div
          className="adCard col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4  col-12"
          key={poster.id}
        >
          <img
            className="adCard-img"
            src={poster.img}
            style={{ borderRadius: "10px" }}
            alt="Card cap"
          />
          <div className="card-body">
            <p
              className="offerTitle h2"
              style={{ fontWeight: "400", color: "#ff4848" }}
            >
              {poster.offerTitle}
            </p>
            <p
              className="percentageOff my-2"
              style={{
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              {poster.percentageOff}
            </p>
            <p
              className="adDescription"
              style={{ fontWeight: "400", color: "gainsboro" }}
            >
              {poster.description}
            </p>
            <button
              className="adBtn btn py-2 px-3
            "
            >
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdCards;
