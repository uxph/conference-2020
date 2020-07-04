import React from "react";

const Nav = (props) => {
  let navClass = props.isHomePage ? "home-nav" : "";
  return (
    <nav className={navClass}>
      <div className="wrapper">
        <div className="d-flex justify-content-between">
          <img
            src={"/images/logos/uxph_logo.svg"}
            className="width-128"
            alt="UXPH navigation logo"
          />
          <ul>
            <li>Home</li>
            <li>Program Flow</li>
            <li>About Us</li>
            <li>Sponsors</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
