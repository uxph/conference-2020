import React, { useState } from "react";
import { Row, Col } from "reactstrap";

//import members from "../../data/members.json";

const AboutConference = ({ title, id }) => {
  const test = id + 10;

  const HTML = `ID: ${test}`;

  const loop = ["MJ", "Tyrone", "Gavin"].map((x) => {
    return <p>{`${x} speaker name`}</p>;
  });

  const [value, setValue] = useState(100);

  return (
    <section>
      <div className="wrapper about-conf">
        <Row>
          <Col className="video-placeholder" md={6}>
            {title} {HTML}
            <p>{value}</p>
            <button
              onClick={() => {
                setValue(value + 1);
              }}
            >
              Click Me!
            </button>
          </Col>
          <Col className="paragraph" md={6}>
            {loop}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutConference;
