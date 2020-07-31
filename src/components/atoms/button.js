import React from "react";

const Button = ({
  children,
  href = "/",
  variant,
  className,
  bgColor = "white",
}) => {
  return (
    <div className={`button-outer-layer ${className}`}>
      <a
        className={`button ${variant}`}
        href={href}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <span>{children}</span>
      </a>
    </div>
  );
};

export default Button;
