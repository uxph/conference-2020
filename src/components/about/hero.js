import React from "react";
import Button from "../atoms/button";
import { Card, CardText, Container } from "reactstrap";

const Hero = () => {
  return (
    <section className="padding-top-128 padding-bottom-256 text-center about-hero">
      <Container className="margin-x-64">
        <div className="margin-bottom-64">
          <img
            src={"/images/logos/growth_beyond_borders.png"}
            alt="Growth Beyond Borders"
          />
        </div>
        <h1 className="font-size-32 text-white margin-bottom-24">
          About the Conference
        </h1>
        <p className="margin-bottom-64">
          We designers are at the forefront of digital transformation and
          inciting positive change that lasts
        </p>
        <Card className="hero-card padding-y-32 padding-x-32">
          <CardText className="line-height-32">
            Join UXPH as we grow beyond our borders in a weekend packed with
            learning, inspiration, and collaboration–all within the comfort of
            your own screen.
          </CardText>
          <div className="text-center">
            <Button className="mr-3">Get Tickets</Button>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Hero;
