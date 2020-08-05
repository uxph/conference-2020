import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/partners/hero";
import Sponsors from "../components/partners/sponsors";
import "../assets/sass/partners.scss";
import "../assets/sass/main.scss";

const Partners = () => (
  <Layout>
    <SEO title="Partners" />
    <Hero />
    <Sponsors />
  </Layout>
);

export default Partners;
