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
            {/* <div className="container-fluid">
              <div className="productCards row">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="shadow productCard col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-6 col-12"
                  >
                    <Product {...product} />
                  </div>
                ))}
              </div>
            </div> */}
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
