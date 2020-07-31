import React from "react";
import Button from "../atoms/button";

const Hero = () => {
  return (
    <section className="padding-top-128 padding-bottom-256 text-center main-header">
      <div className="main-header--logo margin-bottom-48">
        <img
          src={"/images/logos/uxph_conf_logo.png"}
          alt="UXPH Conference 2020"
        />
      </div>
      <div className="main-header--eventlogo margin-bottom-24">
        <img
          src={"/images/logos/growth_beyond_borders.png"}
          alt="Growth Beyond Borders"
        />
      </div>
      <h2
        className="text-white margin-bottom-48"
        style={{
          fontSize: "1.25rem",
          letterSpacing: "3px",
        }}
      >
        OCTOBER 21 - 22, 2020
      </h2>
      <div className="text-center">
        <Button className="mr-3">Get Tickets</Button>
        <Button variant="outline" bgColor="#182335">
          See full program
        </Button>
      </div>
    </section>
  );
};

export default Hero;
