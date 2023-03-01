import React, { useState } from "react";
import "./Product.css";
import { BsStarFill, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({
  id,
  name,
  description,
  formated_price,
  reviews,
  base_image,
  is_wishlisted,
}) => {
  const [favourite, setFavourite] = useState(is_wishlisted);

  const handleFavourite = () => {
    setFavourite((prev) => !prev);
  };

  return (
    <>
      <Link
        to={"/products/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          className="productImg"
          src={base_image.original_image_url}
          alt="Card cap"
        />
      </Link>
      <div className="productDetails align-content-between py-3 px-3">
        <div className="brandAndFav">
          <Link
            to={"/products/" + id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className="productBrand h3 mb-2">{name}</p>
          </Link>
          <div className="favIcon">
            {favourite ? (
              <BsFillHeartFill
                className="h2"
                onClick={handleFavourite}
                style={{ color: "#ff4848" }}
              />
            ) : (
              <BsHeart
                className="h2"
                onClick={handleFavourite}
                style={{ color: "#ff4848" }}
              />
            )}
          </div>
        </div>
        <div className="product-infoBar">
          <div className="product desc h6">
            {`${description.substring(0, 80)}...`}
            <Link
              to={"/products/" + id}
              style={{ textDecoration: "none", color: "#ff4848" }}
            >
              read more
            </Link>
          </div>
          <div className="productPrice h5 mt-2" style={{ color: "#ff4848" }}>
            {formated_price}
          </div>
        </div>
        <div className="product-infoBar2 d-flex justify-content-between my-2">
          <span className="btn add-to-cart-btn h-3 pt-2">Add to cart</span>
          <span style={{ right: "0px" }}>
            <BsStarFill style={{ color: "gold" }} />
            {` (${reviews.average_rating}) Rating`}
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
