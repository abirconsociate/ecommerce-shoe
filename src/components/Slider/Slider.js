import React, { useState, useEffect } from "react";
import "./Slider.css";
import { BsArrowRight } from "react-icons/bs";
import { sliderData } from "../../config/sliderData";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../Loader/Loader";
import { API_URL } from "../../constants/constants";

function Slider() {
  const [slides, setSlides] = useState([...sliderData]);
  const getSlides = async () => {
    const { data } = await axios.get(`${API_URL}api/sliders`);
    const filteredSlides = data.data.filter((product) => {
      return product;
    });
    setSlides(filteredSlides);
    // console.log(data.data);
  };

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <>
      {slides.length === 0 ? (
        <Loader />
      ) : (
        <Carousel variant="dark" className="mt-5" indicators="false">
          {slides.map((product) => (
            <Carousel.Item key={product.id}>
              <div className="cntr">
                <div className="carsl-text">
                  <h1 className="brandname h1">{product.title}</h1>
                  <h4 className="h3 my-2">Men Shoes</h4>
                  <button className="carousel-button btn my-2 py-2">
                    <p className="btn-font h5 pt-2">
                      Shop Now
                      <BsArrowRight />
                    </p>
                  </button>
                </div>
                <div className="carsl-img">
                  <img
                    className="d-block w-100"
                    src={product.image_url}
                    alt="First slide"
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Slider;
