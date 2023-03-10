import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import Product from "./Product";
// import { productsData } from "../../config/productsData";
import MultiRangeSlider from "multi-range-slider-react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { API_URL } from "../../constants/constants";
import { BsStarFill } from "react-icons/bs";

const AllProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12600);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  // console.log(props.prop);
  const getAllProducts = async () => {
    const { data } = await axios.get(`${API_URL}api/products?limit=100`);
    const filteredProducts = data.data.filter((product) => {
      return product;
    });
    setAllProducts(filteredProducts);
    // console.log(data.data);
  };

  useEffect(() => {
    if (props.prop) {
      setAllProducts(props.prop);

      // console.log(props.prop);
    } else {
      getAllProducts();
    }
  }, []);

  return (
    <>
      {!props ? (
        <div className="d-flex justify-content-center ttle-container mb-5">
          <p className="d-flex justify-content-center align-items-center h3 ttle">
            All Products
          </p>
        </div>
      ) : (
        <div></div>
      )}
      <div className="allProducts-container container-fluid pc-tablet-only mx-4">
        <div className="productsView row">
          <div className="productsFilter shadow col-xxl-3 col-xl-3 col-lg-3">
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
          <div className="productSection col-xxl-9 col-xl-9 col-lg-9">
            <div className="productCategories">
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
              <div className="container-fluid my-5">
                <div className="productCards row gy-5">
                  {allProducts.map((product) => (
                    <div
                      key={product.id}
                      className="col-xxl-4 col-xl-4 col-lg-6"
                    >
                      <Product {...product} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="allProducts-container container-fluid mobile-tablet-only">
        <div className="row">
          <div className="productCategories col-md-12 col-sm-12 col-12">
            <div>
              <a href="#!" className="h6 my-3">
                Men
              </a>
            </div>
            <div>
              <a href="#!" className="h6  my-3">
                Women
              </a>
            </div>
            <div>
              <a href="#!" className="h6 my-3">
                Kids
              </a>
            </div>
          </div>
        </div>
        {allProducts.length === 0 ? (
          <Loader />
        ) : (
          <div className="container-fluid">
            <div className="productCards row gy-5">
              {allProducts.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 col-12">
                  <Product {...product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
