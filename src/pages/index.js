import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/index/hero";
import AboutConference from "../components/index/aboutConference";
import Figures from "../components/index/figures";
import Speakers from "../components/index/speakers";
import Testimonials from "../components/index/testimonials";
import "../assets/sass/home.scss";

const IndexPage = () => (
  <Layout isHomePage={true}>
    <SEO title="Home" />
    <Hero />
    <AboutConference />
    <Figures />
    <Speakers />
    <Testimonials />
  </Layout>
);

export default IndexPage;
