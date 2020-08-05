import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/about/hero";
import Intro from "../components/about/intro";
import Info from "../components/about/info";
import Team from "../components/about/team";
import "../assets/sass/about.scss";
import "../assets/sass/main.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero />
    <Intro />
    <Info />
    <Team />
  </Layout>
);

export default About;
