import React from "react";
import bg from "../assets/background.png";
import mobile from "../assets/app.png";
import form from "../assets/form.svg";
function MobileApp() {
  return (
    <section
      className="MobileApp"
      style={{ background: `url(${bg}) no-repeat center/cover` }}
    >
      <div className="mobile-header">
        <div>
          <h1 className="mobile-heading">
            Get The <br />{" "}
            <span style={{ color: "#641A89", fontWeight: "bold" }}>NOUVAK</span>{" "}
            APP
          </h1>
          <p>Enter Your Mobile Noumber To Get App Download Link</p>
        </div>
        <div className="mobile-form">
          <img src={form} alt="" />
          <button>Send</button>
        </div>
      </div>
      <div className="mobile-image">
        <img src={mobile} alt="" />
      </div>
    </section>
  );
}

export default MobileApp;
