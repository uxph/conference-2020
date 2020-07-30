import React from "react";
import home from "../../data/home.json";
import { Container, Row, Col } from "reactstrap";

const Figures = () => {
  const figure_list = home["figures"].map((figure) => {
    return (
      <Col xs={12} md={3}>
        <h1 class="text-center">{figure.header}</h1>
        <p class="text-center">{figure.body}</p>
      </Col>
    );
  });

  return (
    <section className="figures-section padding-y-256">
      <Container>
        <Row>{figure_list}</Row>
      </Container>
    </section>
  );
};

export default Figures;
