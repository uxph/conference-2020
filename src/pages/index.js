import React from "react";
import "./home.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button } from "reactstrap";

const IndexPage = () => (
  <Layout isHomePage={true}>
    <SEO title="Home" />
      <div className="padding-y-96 padding-x-128 text-center main-header">
              <div className="main-header--logo margin-bottom-48">
                  <img src={"/images/logos/UXPH CONF Logo.png"} />
              </div>
              <div className="main-header--eventlogo margin-bottom-48">
                  <img src={"/images/logos/Growth Beyond Borders.png"} />

              </div>
              <h3 className="text-white margin-bottom-48">OCTOBER 21 - 22, 2020</h3>
              <div className="btn-container text-center">
                  <a className="main-btn main-btn--fill" href="#">GET TICKETS</a>
                  <a className="main-btn main-btn--alt" href="#">SEE FULL PROGRAM</a>
              </div>
      </div>

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
