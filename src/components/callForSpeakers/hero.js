import React from "react";

const Hero = () => {
  return (
    <header className="padding-top-96 padding-bottom-256 text-center partner-hero">
      <div className="wrapper">
        <img
          src={"/images/logos/uxph_conf_logo.svg"}
          alt="UXPH Conference 2020"
          className="width-96 d-block mx-auto margin-bottom-32"
        />
        <h2 className="text-white margin-bottom-24">Call for speakers</h2>
        <p className="margin-bottom-48">
          We need people to talk or facilitate workshops. <br />
          That's basically what you're hired for.
        </p>
      </div>
    </header>
  );
};

export default Hero;
