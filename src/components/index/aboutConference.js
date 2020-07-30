import React from "react";
import { Container, Row, Col } from "reactstrap";

//import members from "../../data/members.json";
import home from "../../data/home.json";

const AboutConference = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="margin-bottom-32">
            <div className="video-placeholder"></div>
          </Col>
          <Col className="paragraph margin-bottom-32" xs={12} md={6}>
            <h2 className="heading--two">{home.about_conf["title"]}</h2>
            <p
              className="margin-bottom-32"
              dangerouslySetInnerHTML={{ __html: home.about_conf["body"] }}
            ></p>
            <a className="main-btn main-btn--fill" href="/">
              GET TICKETS
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutConference;
