import React, { useState, useEffect } from "react";
import { images } from "../../config/ImageData";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";
import { API_URL } from "../../constants/constants";

function SingleProduct() {
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [singleProduct, setSingleProduct] = useState([]);

  let { id } = useParams();
  // console.log(id);

  const getSingleProduct = async () => {
    const { data } = await axios.get(`${API_URL}api/products/${id}`);
    setSingleProduct(data.data);
    // console.log(data.data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <div className="single-product-container" style={{ marginTop: "160px" }}>
        {singleProduct.length === 0 ? (
          <Loader />
        ) : (
          <div className="single-product my-5">
            <div className="container-fluid row product-container">
              <div className="d-flex col col-md-6 product-image">
                <img src={images[currentProductImage].png} alt="" />
                <div className="thumbnail-wrapper d-flex">
                  <div className="thumbnail my-2 mx-2">
                    <img
                      onClick={() => setCurrentProductImage(0)}
                      className={currentProductImage === 0 ? "active" : ""}
                      src={images[0].thumbnail}
                      alt="thumbnail1"
                    />
                  </div>

                  <div className="thumbnail my-2 mx-2">
                    <img
                      onClick={() => setCurrentProductImage(1)}
                      className={currentProductImage === 1 ? "active" : ""}
                      src={images[1].thumbnail}
                      alt="thumbnail2"
                    />
                  </div>

                  <div className="thumbnail my-2 mx-2">
                    <img
                      onClick={() => setCurrentProductImage(2)}
                      className={currentProductImage === 2 ? "active" : ""}
                      src={images[2].thumbnail}
                      alt="thumbnail3"
                    />
                  </div>

                  <div className="thumbnail my-2 mx-2">
                    <img
                      onClick={() => setCurrentProductImage(3)}
                      className={currentProductImage === 3 ? "active" : ""}
                      src={images[3].thumbnail}
                      alt="thumbnail4"
                    />
                  </div>
                </div>
              </div>
              <div className="product-description col col-md-6">
                <p className="text-uppercase fw-700 fs-100 letter-spacing-1 clr-primary-400">
                  {singleProduct.category_name}
                </p>
                <h1 className="fw-700 line-height-300 fs-800 clr-neutral-900">
                  {singleProduct.name}
                </h1>
                <p className="fw-400 line-height-500 fs-400 clr-neutral-700">
                  {singleProduct.short_description}
                </p>
                <div className="product-price">
                  <div className="discounted-price flex">
                    <span className="fw-700 clr-neutral-900 fs-700">
                      {singleProduct.price}
                    </span>
                  </div>
                </div>

                <div className="action-wrapper flex">
                  <div className="product-quantity flex">
                    <BsDashLg
                      onClick={() =>
                        setProductQuantity((prevState) =>
                          prevState !== 0 ? prevState - 1 : 0
                        )
                      }
                    />
                    <span className="fw-700 fs-400 clr-neutral-900">
                      {productQuantity}
                    </span>
                    <BsPlusLg
                      onClick={() =>
                        setProductQuantity((prevState) => prevState + 1)
                      }
                    />
                  </div>
                  <button
                    //   onClick={handleAddToCart}
                    className="btn cart-button my-5"
                  >
                    <BsFillCartFill className="mx-2" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default SingleProduct;
