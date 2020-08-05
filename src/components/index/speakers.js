import React, { useState } from "react";
import { Container } from "reactstrap";
import speakers from "../../data/speakers.json";
import SpeakerModal from "./speakerModal";
import Button from "../atoms/button";

const Speakers = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [speakerVal, setSpeakerVal] = useState(-1);

  const list_speakers = speakers.map((speaker) => {
    return (
      <div className="" key={speaker.id}>
        <div className="speakers-avatar text-center">
          <img src={speaker.image_url} alt="name" />
        </div>
        <h3 className="text-center margin-bottom-8">
          <button
            className="btn-to-txt"
            onClick={() => {
              setSpeakerVal(speaker.id);
              setModal(!modal);
            }}
          >
            {speaker.name}
          </button>
        </h3>
        <p className="text-center margin-bottom-16">
          {speaker.position} at <span>{speaker.company}</span>
        </p>
        <div className="text-center padding-bottom-32">
          <img src={speaker.company_logo} alt={speaker.company} />
        </div>
      </div>
    );
  });

  return (
    <section className="speakers-section padding-y-64">
      <Container>
        <h2 className="text-center margin-bottom-64">OUR SPEAKERS</h2>
        <div className="margin-bottom-32 speakers-list">{list_speakers}</div>
        <div className="btn-container">
          <Button className="mx-auto" href="/program">
            See Full Program
          </Button>
        </div>
        <SpeakerModal val={speakerVal} modal={modal} toggle={toggle} />
      </Container>
    </section>
  );
};

export default Speakers;
