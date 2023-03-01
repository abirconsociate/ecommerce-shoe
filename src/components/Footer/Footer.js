import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        style={{ backgroundColor: "#343434", color: "gainsboro" }}
        className="text-center text-lg-start"
      >
        <MDBContainer className="text-md-start mt-5 pt-5 px-5" fluid>
          <MDBRow className="mt-6">
            <div className="view-in-mobile">
              <MDBCol
                sm="6"
                md="2"
                lg="2"
                xl="2"
                className="mx-auto mb-md-0 mb-4"
              >
                <div className="mb-3">
                  <img className="logo-img" src={logo} alt="logo" />
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lore
                </p>
              </MDBCol>
            </div>
            <MDBCol sm="6" md="2" lg="2" xl="2" className="col-6 mx-auto mb-4">
              <h5 className="fw-bold mb-4">About Us</h5>
              <p>
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  My account
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cart
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Checkout
                </a>
              </p>
            </MDBCol>

            <MDBCol sm="6" md="2" lg="2" xl="2" className="col-6 mx-auto mb-4">
              <h5 className="fw-bold mb-4">Help</h5>
              <p>
                <a href="#!" className="text-reset">
                  Payment
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Shipping
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cancellation & Return
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol sm="6" md="2" lg="2" xl="2" className="col-6 mx-auto mb-4">
              <h5 className="fw-bold mb-4 ">Information</h5>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  your account
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Setting
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Information
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Helps
                </a>
              </p>
            </MDBCol>

            <MDBCol
              sm="6"
              md="2"
              lg="2"
              xl="2"
              className="col-6 mx-auto mb-md-0 mb-4"
            >
              <h5 className="fw-bold mb-4">Contact us</h5>
              <p>
                <a href="#!" className="text-reset">
                  Shipping Option
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Call: 12345 6789
                </a>
              </p>
            </MDBCol>

            <MDBCol
              sm="6"
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-md-0 mb-4"
            >
              <div className="view-in-desktoptablet">
                <div className="mb-3">
                  <img className="logo-img" src={logo} alt="logo" />
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lore
                </p>
              </div>
              <hr style={{ height: "3px" }} />
              <div className="d-flex socialIcons">
                <a
                  href="#!"
                  className="d-flex justify-content-center align-items-center"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#!"
                  className="d-flex justify-content-center align-items-center"
                >
                  <BsInstagram />
                </a>
                <a
                  href="#!"
                  className="d-flex justify-content-center align-items-center"
                >
                  <BsTwitter />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "#262626", color: "gainsboro" }}
        >
          © Copyright AJShoes_ All Rights Reserved
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
