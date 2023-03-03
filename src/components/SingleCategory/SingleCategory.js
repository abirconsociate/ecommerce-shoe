import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants/constants";
import Loader from "../Loader/Loader";
// import Product from "../Products/Product";
import AllProducts from "../Products/AllProducts";

const SingleCategory = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  let { id } = useParams();

  const getCategoryProducts = async () => {
    const { data } = await axios.get(
      `https://parind.online/parind4/public/api/products?category_id=${id}`
    );
    setCategoryProducts(data.data);
    // console.log(data.data);
  };

  useEffect(() => {
    getCategoryProducts();
  }, []);

  return (
    <>
      <div className="category-container" style={{ marginTop: "160px" }}>
        {categoryProducts.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="d-flex justify-content-center ttle-container mb-5">
              <p className="d-flex justify-content-center align-items-end h-3 ttle">
                {categoryProducts[0].category_name}
              </p>
            </div>
            <div className="singleCategoryProducts">
              <AllProducts prop={categoryProducts} />
              {console.log(categoryProducts)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleCategory;
