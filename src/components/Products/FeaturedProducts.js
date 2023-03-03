import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loader from "../Loader/Loader";
import axios from "axios";
import { API_URL } from "../../constants/constants";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const getAllProducts = async () => {
    const { data } = await axios.get(`${API_URL}api/products?limit=100`);
    const filteredProducts = data.data.filter((product) => {
      return product;
    });
    // console.log(data.data);
    setFeaturedProducts(filteredProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center ttle-container mb-5">
        <p className="d-flex justify-content-center align-items-center h3 ttle">
          Freatured Products
        </p>
      </div>
      <div className="d-flex justify-content-center">
        {featuredProducts.length === 0 ? (
          <Loader />
        ) : (
          <div className="container-fluid">
            <div className="productCards row gy-5">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                >
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

export default FeaturedProducts;
