import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./About.css";

function About() {
  return (
    <Container>
      <Card className="about-card">
        <Card.Body>
          <h1>About</h1>
        </Card.Body>
      </Card>
      <Card className="mission">
        <Card.Body>Our Mission </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
