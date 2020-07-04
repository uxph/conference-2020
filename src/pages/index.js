import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout isHomePage={true}>
    <SEO title="Home" />
    <header className="padding-y-128 bg-dark">
      <div className="wrapper">
        <h1 className="text-center text-white margin-bottom-8">
          Designing Across Borders
        </h1>
        <p className="text-center text-white margin-bottom-24">
          UXPH Conference 2020
        </p>
        <div className="d-flex justify-content-center">
          <a href="/" className="button margin-right-8">
            Buy tickets
          </a>
          <a href="/program" className="button white outline">
            See full program
          </a>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
