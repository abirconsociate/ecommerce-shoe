import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Search } from "react-bootstrap-icons";
import { Cart, Heart } from "react-bootstrap-icons";
import { BsHouse, BsShop, BsBoxSeam, BsTelephone } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import OfferStrip from "../OfferStrip/OfferStrip";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <OfferStrip />
      <Navbar
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="light"
        className="custom-navbar shadow"
      >
        <Container fluid className="mx-2">
          <Navbar.Brand href="#home">
            <img className="logo-img" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Link
                to="/"
                className="h5 me-5"
                style={{ textDecoration: "none", color: "#343434" }}
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="h5 me-5"
                style={{ textDecoration: "none", color: "#343434" }}
              >
                Shop
              </Link>

              <Link
                className="h5 me-5"
                style={{ textDecoration: "none", color: "#343434" }}
                to="/"
              >
                Order
              </Link>
              <Link
                className="h5 me-5"
                style={{ textDecoration: "none", color: "#343434" }}
                to="/"
              >
                Contact
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="me-3">
                <div className={visible ? "show-search" : "hide-search"}>
                  <input
                    id="search-bar"
                    className="me-2 shadow"
                    placeholder="Search..."
                    type="text"
                    style={{
                      borderRadius: "20px",
                      height: "40px",
                      padding: "20px",
                      border: "none",
                    }}
                  />
                </div>
                <Search onClick={handleVisibility} className="h3" />
              </Nav.Link>
              <Nav.Link href="#" className="me-2">
                <Heart className="h2" />
                <span className="badge badge-warning" id="lblCartCount">
                  5
                </span>
              </Nav.Link>
              <Nav.Link href="#" className="me-5">
                <Cart className="h2" />
                <span className="badge badge-warning" id="lblCartCount">
                  1
                </span>
              </Nav.Link>
              <button className="navbar-button btn my-1 py-1">
                <p className="btn-font h6 pt-2">Sign up</p>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
