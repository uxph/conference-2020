import React from "react";
import Hero from "../components/callForSpeakers/hero";
import Form from "../components/callForSpeakers/form";
import Footer from "../components/footer";
import SEO from "../components/seo";

const callForSpeakersPage = () => {
  return (
    <>
      <SEO title="Call for speakers" />
      <Hero />
      <Form />
      <Footer />
    </>
  );
};

export default callForSpeakersPage;
