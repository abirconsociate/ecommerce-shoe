import React, { useState, useEffect } from "react";
import "./Categories.css";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import Loader from "../Loader/Loader";
import { API_URL } from "../../constants/constants";
// import { categoriesData } from "../../config/categoriesData";
import { Link } from "react-router-dom";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const getAllCategories = async () => {
    const { data } = await axios.get(`${API_URL}api/categories`);
    const filteredCategories = data.data.filter((category) => {
      return category.name !== "Root";
    });
    setAllCategories(filteredCategories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center ttle-container mb-5">
        <p className="d-flex justify-content-center align-items-center h3 ttle">
          Categories
        </p>
      </div>
      <div className="container-fluid">
        <div className="row my-5 gy-4">
          {allCategories.length === 0 ? (
            <Loader />
          ) : (
            allCategories.map((category) => (
              <div
                key={category.id}
                className="cat-box col col-xxl-3 col-xl-3 col-lg-3 col-sm-4 col-6 my-3"
              >
                <div className="box">
                  <Link
                    to={"/categories/" + category.id}
                    key={category.id}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className="cat-img d-block w-100 h-100"
                      src={category.image_url}
                      alt={category.name}
                    />
                    <div className="box-overlay-pc">
                      <p className="category-title-pc">{category.name}</p>
                    </div>
                    <div className="box-div-mob">
                      <p className="category-title-mob">{category.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
