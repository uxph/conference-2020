import React from "react";
import { Container, Row, Col } from "reactstrap";
import home from "../../data/home.json";

const testimonials = home.testimonials.map((test) => {
  return (
    <Col md={4} xs={12} className="margin-bottom-32">
      <p class="testimonial text-center margin-bottom-16">{test.body}</p>
      <p class="author text-center">{test.author}</p>
    </Col>
  );
});

const Testimonials = () => {
  return (
    <section className="testimonials-section padding-y-256">
      <Container>
        <Row>{testimonials}</Row>
      </Container>
    </section>
  );
};

export default Testimonials;
