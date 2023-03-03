import React, { useState, useEffect } from "react";
import Product from "../../components/Products/Product";
import axios from "axios";
import { API_URL } from "../../constants/constants";
import Loader from "../../components/Loader/Loader";

const WishlistScreen = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);
  const getWishlistedProducts = async () => {
    const { data } = await axios.get(`${API_URL}api/products?limit=100`);
    const filteredProducts = data.data.filter((product) => {
      return product.is_wishlisted;
    });
    setWishlistedProducts(data.data);
    // console.log(filteredProducts);
  };

  useEffect(() => {
    getWishlistedProducts();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center ttle-container mb-5">
        <p className="d-flex justify-content-center align-items-center h3 ttle">
          Your Wishlist
        </p>
      </div>
      <div className="d-flex justify-content-center">
        {wishlistedProducts.length === 0 ? (
          <Loader />
        ) : (
          <div className="container-fluid">
            <div className="productCards row gy-5">
              {wishlistedProducts.map((product) => (
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

export default WishlistScreen;
