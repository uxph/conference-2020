import React from "react";
import Button from "../components/atoms/button";

const ComingSoon = () => {
  return (
    <header
      style={{
        backgroundColor: "var(--black)",
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
        className="wrapper margin-y-128 position-relative"
        style={{
          zIndex: "1300",
        }}
      >
        <img
          src={"/images/logos/uxph_conf_logo.svg"}
          alt="UXPH Conference 2020"
          className="width-128 d-block mx-auto margin-bottom-32"
        />
        <h1 className="text-center text-white margin-bottom-32 font-size-48">
          Coming Soon!
        </h1>
        <div className="text-center">
          <Button
            variant="outline"
            bgColor="#182335"
            className="margin-bottom-16"
            href="/call-for-speakers"
          >
            Call for Speakers
          </Button>
          <br />
          <Button variant="outline" bgColor="#182335">
            Sponsorship package
          </Button>
        </div>
      </div>
      <img
        src={"./images/section-transition--main.svg"}
        className="w-100"
        alt=""
        style={{
          position: "absolute",
          bottom: "0",
          zIndex: "1100",
        }}
      />
    </header>
  );
};

export default ComingSoon;
