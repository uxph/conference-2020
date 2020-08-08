import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button } from "reactstrap";

const ProgramPage = () => {
  return (
    <Layout>
      <SEO title="Programmer" />
      <header>
        <div className="wrapper">
          <h1>Program</h1>
          <Button color="danger">Click this button</Button>
        </div>
      </header>
    </Layout>
  );
};

export default ProgramPage;
