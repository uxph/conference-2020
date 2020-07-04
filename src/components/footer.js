import React from "react";

const Footer = () => {
  return (
    <footer className="padding-y-48">
      <div className="wrapper">
        <div>
          <img
            src={"/images/logos/uxph_logo.svg"}
            className="width-128"
            alt="UXPH logo"
          />
          <p>&copy; Copyright {new Date().getFullYear()}</p>
          <a href="https://uxph.org/code-of-conduct/" target="blank">
            View Code of Conduct
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
