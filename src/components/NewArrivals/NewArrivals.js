import React from "react";

import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <>
      <div className="d-flex justify-content-center ttle-container mb-5">
        <p className="d-flex justify-content-center align-items-center h3 ttle">
          New Arrivals
        </p>
      </div>
      <div className="arrBoxes row">
        <div className="arrBox1 col-md-6 col-lg-6 d-flex">
          <div className="arrImg1">
            <img
              src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/391dc7bd-40d1-4b15-a0e0-a8d6dcac3bba"
              alt="arrImg"
            />
          </div>
          <div className="arrInfo1">
            <div className="arrInfoItems1 mt-3">
              <h2 className="arrInfoHeading mb-3">Rockfield</h2>
              <p className="arrInfoPara">
                Lorem ipsum sacf sfesfc asc acssc adewef wfeefr sefesfs efsfds
                acewffw
              </p>
              <span className="arrPrice1">₹ 400</span>
              <button className="arrBtn btn">Shop now</button>
            </div>
          </div>
        </div>
        <div className="arrBox2 col-md-6 col-lg-6 d-flex">
          <div className="arrInfo2">
            <div className="arrInfoItems2 mt-3 ml-3">
              <h2 className="arrInfoHeading mb-3">Rockfield</h2>
              <p className="arrInfoPara">
                Lorem ipsum sacf sfesfc asc acssc adewef wfeefr sefesfs efsfds
                acewffw
              </p>
              <button className="arrBtn btn">Shop now</button>
              <span className="arrPrice2">₹ 400</span>
            </div>
          </div>
          <div className="arrImg2">
            <img
              src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/391dc7bd-40d1-4b15-a0e0-a8d6dcac3bba"
              alt="arrImg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
