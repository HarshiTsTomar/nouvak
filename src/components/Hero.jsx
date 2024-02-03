import React from 'react'
import AClogo from '../assets/ac.svg'
import templogo from '../assets/Group 818.svg'
import businessWoman from '../assets/business.png'
import businessMan from '../assets/Group 2.png'
function Hero() {
  return (
    <>
      <section id="hero">
        <div className="AC">
          <img src={AClogo} alt="" />
          <img src={templogo} alt="" />
        </div>
        <div className="hero-banner">
          <div className="hero-banner-text">
            <h2>Be a part of</h2>
            <h2 style={{ marginLeft: "40px" }}>
              The
              <span
                style={{
                  marginLeft: "20px",
                  fontSize: "40px",
                  color: "#641a89",
                }}
              >
                Solution
              </span>
            </h2>
            <h2>Not a part of</h2>
            <h2 style={{ marginLeft: "40px" }}>
              The
              <span style={{ marginLeft: "20px", fontSize: "40px" }}>
                Pollution
              </span>
            </h2>
          </div>
          <div className="hero-banner-logo">
            <img src={businessWoman} alt="" />
          </div>
        </div>
      </section>
      <section className="hero-lower">
        <h1>
          We Are Concerned About Air Conditioners
          <br /> & Their Environmental Damages
        </h1>
        <div className="lower-wrapper">
          <div className="lower-wrapper-image">
            <img src={businessMan} alt="" />
          </div>
          <div className="lower-wrapper-text">
            <div>
              <span>Nouvak: Greening HVAC Solutions</span>
              <p>
                Nouvak redefines HVAC with eco-conscious, energy-efficient
                systems for sustainability.
              </p>
            </div>
            <hr />
            <div>
              <span>Smart AC Use for Cleaner Air</span>
              <p>
                Smart AC use promotes cleaner indoor air. Nouvak's advanced tech
                optimizes conditioning for healthier spaces.
              </p>
            </div>
            <hr />
            <div>
              <span>Empowering HVAC Careers Sustainably</span>
              <p>
                Nouvak drives sustainable growth in HVAC careers, equipping
                professionals for a greener industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero