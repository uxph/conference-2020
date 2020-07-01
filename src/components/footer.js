import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
