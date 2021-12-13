import React from "react";
import { Container, Col } from "react-bootstrap";
import "./Features.css";

function Features() {
  return (
    <>
      <Container fluid className="featuresHero">
        <Col className="featuresHeroLeft">
          <h2 data-aos="fade-right">
            <b>Tune</b> yourself to <b>Perfection</b>
          </h2>
          <p data-aos="fade-left">
            10 different effects, 4 instruments and EQ Sound Control access for
            you to create, innovate and explore. Easy as it gets!
          </p>
          <button>LEARN MORE</button>
        </Col>
        <Col className="featuresHeroRight"></Col>
      </Container>
      <Container fluid className="featuresInstruments">
        <div data-aos="fade-in">
        <h2>Want to try something new?</h2>
        <p>Checkout the Piano, Guitar, Bass and Strings version of our app and expand you creative universe to new limits!</p>
        </div>
        <button data-aos="fade-in">CHECK IT OUT</button>
      </Container>
    </>
  );
}

export default Features;
