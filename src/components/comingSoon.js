import React from "react";
import Button from "../components/atoms/button";
import info from "../data/info.json";

const ComingSoon = () => {
  return (
    <header
      style={{
        backgroundColor: "var(--black)",
        overflow: "hidden",
      }}
    >
      {/* Video overlay */}
      <div
        style={{
          position: "fixed",
          backgroundColor: "var(--black)",
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
          zIndex: "1100",
          opacity: "0.9",
        }}
      ></div>
      <iframe
        width="150%"
        height="100%"
        className="position-fixed"
        src="https://www.youtube.com/embed/EWZ5HRa2qf8?controls=0&loop=1&autoplay=1&mute=1&start=11&end=209&showinfo=0&playlist=EWZ5HRa2qf8"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="UXPH teaser video"
        style={{
          left: "-390px",
          filter: "grayscale(100%)",
          zIndex: "1000",
        }}
      ></iframe>
      <div
        className="position-fixed"
        style={{
          zIndex: "1300",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={"/images/logos/uxph_conf_logo.svg"}
          alt="UXPH Conference 2020"
          className="width-96 d-block mx-auto margin-bottom-32"
        />
        <h1 className="text-center text-white margin-bottom-32 font-size-48">
          Coming Soon!
        </h1>
        <div className="text-center">
          <Button
            variant="outline"
            bgColor="#182335"
            className="margin-left-8 margin-right-8 margin-bottom-16"
            href="/call-for-speakers"
          >
            Call for Speakers
          </Button>
          <Button
            variant="outline"
            bgColor="#182335"
            className="margin-left-8 margin-right-8 margin-bottom-16"
          >
            Sponsorship package
          </Button>
        </div>
        <div className="d-flex justify-content-center margin-top-64">
          <a href={info.twitter} target="blank">
            <img
              src={"/images/icons/twitter.svg"}
              alt="UXPH Twitter Page"
              className="margin-right-24"
            />
          </a>
          <a href={info.instagram} target="blank">
            <img
              src={"/images/icons/ig-square.svg"}
              alt="UXPH Instagram Page"
              className="margin-right-24"
            />
          </a>
          <a href={info.facebook_page} target="blank">
            <img
              src={"/images/icons/facebook-square.svg"}
              alt="UXPH Facebook Page"
              className="margin-right-24"
            />
          </a>
          <a href={info.linkedin} target="blank">
            <img src={"/images/icons/linkedin.svg"} alt="UXPH LinkedIn Page" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default ComingSoon;
