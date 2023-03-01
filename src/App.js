import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import AllProductsScreen from "./screens/AllProductsScreen/AllProductsScreen";
import Error from "./screens/Error/Error";
import "./App.css";
import SingleProductScreen from "./screens/SingleProductScreen/SingleProductScreen";
import SingleCategoryScreen from "./screens/SingleCategoryScreen/SingleCategoryScreen";
import { Container } from "react-bootstrap";

function Applayout() {
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
    ],
  },
]);

export default appRouter;
