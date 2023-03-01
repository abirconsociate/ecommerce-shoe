import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import Product from "./Product";
// import { productsData } from "../../config/productsData";
import MultiRangeSlider from "multi-range-slider-react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { API_URL } from "../../constants/constants";
import { BsStarFill } from "react-icons/bs";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12600);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  const getAllProducts = async () => {
    const { data } = await axios.get(`${API_URL}api/products?limit=100`);
    const filteredProducts = data.data.filter((product) => {
      return product;
    });
    setAllProducts(filteredProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="allProducts-container">
        <div className="d-flex justify-content-center ttle-container mb-5">
          <p className="d-flex justify-content-center ttle h-2">All Products</p>
        </div>
        <div className="productsView ">
          <div className="productsFilter shadow">
            <div className="px-4 pt-3">
              <p className="h3">FILTERS</p>
            </div>
            <hr />
            <div className="filterByBrands px-4 pb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="somethingoption1"
                  value="Nike"
                />
                <label
                  className="form-check-label h6"
                  style={{ color: "grey" }}
                >
                  {`   Nike (${2199})`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check2"
                  name="option2"
                  value="Adidas"
                />
                <label
                  className="form-check-label h6"
                  style={{ color: "grey" }}
                >
                  {` Adidas (${2199})`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check3"
                  name="option3"
                  value="Lotto"
                />
                <label
                  className="form-check-label h6"
                  style={{ color: "grey" }}
                >
                  {`  Lotto (${2199})`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check4"
                  name="option4"
                  value="Puma"
                />
                <label
                  className="form-check-label h6"
                  style={{ color: "grey" }}
                >
                  {`   Puma (${2199})`}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check5"
                  name="option5"
                  value="Supreme"
                />
                <label
                  className="form-check-label h6"
                  style={{ color: "grey" }}
                >
                  {`Supreme (${2199})`}
                </label>
              </div>
            </div>
            <hr />
            <div className="px-4 pb-3">
              <p className="h3">PRICE</p>
              <MultiRangeSlider
                min={0}
                max={12600}
                label={false}
                ruler={false}
                style={{
                  border: "none",
                  boxShadow: "none",
                  padding: "6px 10px",
                }}
                thumbLeftColor="black"
                thumbRightColor="black"
                barInnerColor="black"
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
              />
              <div className="rangeOutput d-flex justify-content-around">
                <span
                  className="minRange"
                  style={{ border: "1px solid grey", padding: "5px 5px" }}
                >
                  {minValue}
                </span>
                <span className="h6" style={{ color: "grey" }}>
                  to
                </span>
                <span
                  className="maxRange"
                  style={{ border: "1px solid grey", padding: "5px 5px" }}
                >
                  {maxValue}
                </span>
              </div>
            </div>
            <hr />
            <div className="px-4 pb-3">
              <p className="h3">SIZE</p>
              <div className="filterBySize">
                <input type="button" value="6" className="mx-2  px-3 py-1 h4" />
                <input type="button" value="7" className="mx-2  px-3 py-1 h4" />
                <input type="button" value="8" className="mx-2  px-3 py-1 h4" />
                <input type="button" value="9" className="mx-2  px-3 py-1 h4" />
                <input
                  type="button"
                  value="10"
                  className="mx-2  px-3 py-1 h4"
                />
              </div>
            </div>
            <hr />
            <div className="px-4 pb-3">
              <p className="h3">OCCASION</p>
              <div className="filterByOccasion">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkOccasion1"
                    name="somethingoption1"
                    value="Casual"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Casual
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check2"
                    name="optionOccasion2"
                    value="Riding"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Riding
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check3"
                    name="optionOccasion3"
                    value="Sports"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Sports
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check4"
                    name="optionOccasion4"
                    value="Ethnic"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Ethnic
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkOccasion5"
                    name="option5"
                    value="Formal"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Formal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkOccasion5"
                    name="option5"
                    value="Party"
                  />
                  <label
                    className="form-check-label h6"
                    style={{ color: "grey" }}
                  >
                    Party
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-4 pb-3">
              <p className="h3">RATING</p>
              <div className="filterByRating">
                <p className="h6" style={{ color: "grey" }}>
                  4.5 <BsStarFill /> and above
                </p>
                <p className="h6" style={{ color: "grey" }}>
                  4 <BsStarFill /> and above
                </p>
                <p className="h6" style={{ color: "grey" }}>
                  3.5 <BsStarFill /> and above
                </p>
                <p className="h6" style={{ color: "grey" }}>
                  3 <BsStarFill /> and above
                </p>
              </div>
            </div>
          </div>
          <div className="productSection my-4">
            <div className="productCategories mx-5">
              <div>
                <a href="#!" className="h2 mx-5 my-3">
                  Men
                </a>
              </div>
              <div>
                <a href="#!" className="h2 mx-5 my-3">
                  Women
                </a>
              </div>
              <div>
                <a href="#!" className="h2 mx-5 my-3">
                  Kids
                </a>
              </div>
            </div>
            {allProducts.length === 0 ? (
              <Loader />
            ) : (
              <div className="productCards align-items-center">
                {allProducts.map((product) => (
                  <div
                    key={product.id}
                    className="shadow productCard mx-3 my-3"
                  >
                    <Product {...product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
