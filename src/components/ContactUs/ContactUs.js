import React from "react";
import "./ContactUs.css";
import {
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const contactUs = () => {
  return (
    <div className="container-fluid my-3">
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <div className="contact-details">
          <p className="h2">Our Details</p>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row h2">
              <div>
                <BsGeoAltFill className="mx-2" style={{ color: "#ff4848" }} />
              </div>
              <div>
                <p>+1 2345 6789</p>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row h2">
              <div>
                <BsFillTelephoneFill
                  className="mx-2"
                  style={{ color: "#ff4848" }}
                />
              </div>
              <div>
                <p>Wanowrie, Pune</p>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row h2">
              <div>
                <BsFillEnvelopeFill
                  className="mx-2"
                  style={{ color: "#ff4848" }}
                />
              </div>
              <div>
                <p>test@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <p className="h3">If you want to connect</p>
          <form>
            <div className="form-group my-3">
              <label htmlFor="name" className="contact-label h5">
                Name
              </label>
              <input
                type="text"
                className="contact-input form-control form-control-lg"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email" className="contact-label h5">
                Email Address
              </label>
              <input
                type="email"
                className="contact-input form-control form-control-lg"
                id="email"
                placeholder="enter your email address"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="contactNumber" className="contact-label h5">
                Contact Number
              </label>
              <input
                type="number"
                className="contact-input form-control form-control-lg"
                id="contactNumber"
                placeholder="enter your phone number"
              />
            </div>
            <div class="form-group my-3">
              <label for="msgBox" className="contact-label h5">
                Your Message
              </label>
              <textarea
                class="contact-input form-control form-control-lg"
                id="msgBox"
                rows="3"
              />
            </div>
            <button type="submit" className="carousel-button btn my-2 py-2">
              <p className="btn-font h5 pt-2">Send</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
