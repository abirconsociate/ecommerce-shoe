import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import AllProductsScreen from "./screens/AllProductsScreen/AllProductsScreen";
import Error from "./screens/Error/Error";
import "./App.css";
import SingleProductScreen from "./screens/SingleProductScreen/SingleProductScreen";
import SingleCategoryScreen from "./screens/SingleCategoryScreen/SingleCategoryScreen";
import WishlistScreen from "./screens/WishlistScreen/WishlistScreen";
import ContactUsScreen from "./screens/ContactUsScreen/ContactUsScreen";
import { Container } from "react-bootstrap";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { API_URL } from "./constants/constants";
// import Loader from "./components/Loader/Loader";

function Applayout() {
  ///////////dummy login///////////////////////
  // const [login, setLogin] = useState(false);

  // const makeLogin = async () => {
  //   const { data } = await axios.post(
  //     `${API_URL}api/customer/login?email=ismailkarbhari91@gmail.com&password=Ismail@1234`
  //   );
  //   setLogin(data.message);
  //   // console.log(data.message);
  // };

  // useEffect(() => {
  //   makeLogin();
  // }, []);
  /////////////////////////////////////////////

  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/shop",
        element: <AllProductsScreen />,
      },
      {
        path: "/products/:id",
        element: <SingleProductScreen />,
      },
      {
        path: "/categories/:id",
        element: <SingleCategoryScreen />,
      },
      {
        path: "/wishlist",
        element: <WishlistScreen />,
      },
      {
        path: "/contactus",
        element: <ContactUsScreen />,
      },
    ],
  },
]);

export default appRouter;
