import React from "react";
import "./home.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/index/hero";
import AboutConference from "../components/index/aboutConference";

const IndexPage = () => (
  <Layout isHomePage={true}>
    <SEO title="Home" />
    <Hero />
    <AboutConference title={"Hello World"} id={4} />
  </Layout>
);

/*
    <header className="padding-y-128 bg-dark">
      <div className="wrapper">
        <h1 className="text-center text-white margin-bottom-8">
          Designing Across Borders
        </h1>
        <p className="text-center text-white margin-bottom-24">
          UXPH Conference 2020
        </p>
        <div className="d-flex justify-content-center">
          <Button color="primary" className="margin-right-8">
            Buy Tickets
          </Button>
          <Button outline color="primary" href="/program">
            See full program
          </Button>
        </div>
      </div>
    </header>

*/

export default IndexPage;
