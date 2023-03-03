import React, { useState, useEffect } from "react";
import "./TopSellingCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_URL } from "../../constants/constants";
import axios from "axios";
import Loader from "../Loader/Loader";
import { BsArrowRight } from "react-icons/bs";

const TopSellingCarousel = () => {
  const [topSells, setTopSells] = useState([]);
  const getTopSells = async () => {
    const { data } = await axios.get(`${API_URL}api/products?limit=100`);
    const filteredSlides = data.data.filter((product) => {
      return product.images.length === 2;
    });
    setTopSells(filteredSlides);
    // console.log(filteredSlides);
  };

  useEffect(() => {
    getTopSells();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0.6,
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center ttle-container mb-5">
        <p className="d-flex justify-content-center align-items-center h3 ttle">
          Top Selling Products
        </p>
      </div>
      {topSells.length === 0 ? (
        <Loader />
      ) : (
        <Carousel
          responsive={responsive}
          className="my-5 top-selling-products"
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
        >
          {topSells.map((product) => (
            <div key={product.id} className="cardBig">
              <div className="card">
                <img
                  className="image-main d-block w-100"
                  src={product?.images[0]?.original_image_url}
                  alt="main slide"
                />
                <div className="image-hover displayPcOnly">
                  <img
                    className="d-block w-100  h-100"
                    src={product?.images[1]?.original_image_url}
                    alt="hover slide"
                  />
                </div>
              </div>
              <div className="card-text px-3 py-3">
                <p className="brand-name h5 px-2 pt-2">{product.name}</p>
                <p className="shoe-price h6 px-2 pe-2">
                  {product.formated_price}
                </p>
                <button className="adBtn  btn mx-2 mb-2 py-2 px-3">
                  Shop Now <BsArrowRight />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default TopSellingCarousel;
