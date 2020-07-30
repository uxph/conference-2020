import React from "react";
const Hero = () => {
  return (
    <section className="padding-top-128 padding-bottom-256 text-center main-header">
      <div className="main-header--logo margin-bottom-48">
        <img
          src={"/images/logos/UXPH CONF Logo.png"}
          alt="UXPH Conference Logo"
        />
      </div>
      <div className="main-header--eventlogo margin-bottom-48">
        <img
          src={"/images/logos/Growth Beyond Borders.png"}
          alt="Beyond Borders"
        />
      </div>
      <h3 className="text-white margin-bottom-48">OCTOBER 21 - 22, 2020</h3>
      <div className="btn-container text-center">
        <a className="main-btn main-btn--fill" href="/">
          GET TICKETS
        </a>
        <a className="main-btn main-btn--alt" href="/">
          SEE FULL PROGRAM
        </a>
      </div>
    </section>
  );
};

export default Hero;
