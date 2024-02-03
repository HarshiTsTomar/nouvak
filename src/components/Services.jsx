import React from "react";
import logo1 from "../assets/Group 3.svg";
import logo2 from "../assets/Group 4.svg";
import logo3 from "../assets/Group 5.svg";
import logo4 from "../assets/Group 6.svg";
import logo5 from "../assets/Group 7.svg";
import logo6 from "../assets/Group 8.svg";
import logo7 from "../assets/Group 9.svg";
import logo8 from "../assets/Group 10.svg";
function Services() {
  return (
    <section className="services">
      <div className="services-text">
        <h2>Our Services</h2>
        <p>
          End To End Climate-Friendly <br /> Solutions
        </p>
      </div>
      <div className="services-grid">
        <div>
          <img src={logo1} alt="" />
          <span>HVAC consultancy</span>
        </div>
        <div>
          <img src={logo2} alt="" />
          <span>Smart IoT</span>
        </div>
        <div>
          <img src={logo3} alt="" />
          <span>Heat Pump</span>
        </div>
        <div>
          <img src={logo4} alt="" />
          <span>Air Conditioner</span>
        </div>
        <div>
          <img src={logo5} alt="" />
          <span>Sterilization</span>
        </div>
        <div>
          <img src={logo6} alt="" />
          <span>Installation</span>
        </div>
        <div>
          <img src={logo7} alt="" />
          <span>AMC</span>
        </div>
        <div>
          <img src={logo8} alt="" />
          <span>Certification Program</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
