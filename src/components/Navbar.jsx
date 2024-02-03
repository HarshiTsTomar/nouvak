import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/NOUVAK.svg";
function Navbar() {
  return (
    <section id="navbar">
      <div className="social-media-banner">
        <div className="social-media-logos">
          <FaFacebookF />
          <BsTwitterX />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <div className="nav-banner">
        <div className="banner-logo">
          <img src={logo} alt="nouvak-logo" />
        </div>
              <div className="banner-titles">
                  <h3>Home</h3>
                  <h3>About Us</h3>
                  <h3>Contact Us</h3>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
