import React from "react";
import { Container } from "reactstrap";
import home from "../../data/home.json";

const speakers = home.speakers;
const list_speakers = speakers.map((speaker) => {
  return (
    <div className="">
      <div className="speakers-avatar text-center">
        <img src={speaker.avatar} alt="name" />
      </div>
      <h3 className="text-center margin-bottom-8">{speaker.name}</h3>
      <p className="text-center margin-bottom-16">
        {speaker.position} at <span>{speaker.company}</span>
      </p>
      <div className="text-center padding-bottom-32">
        <img src={speaker.logo} alt={speaker.company} />
      </div>
    </div>
  );
});

const Speakers = () => {
  return (
    <section className="speakers-section padding-y-64">
      <Container>
        <h2 className="text-center margin-bottom-64">OUR SPEAKERS</h2>
        <div className="margin-bottom-32 speakers-list">{list_speakers}</div>
        <div className="btn-container">
          <a className="text-center main-btn main-btn--fill" href="/">
            See Full Program
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Speakers;
