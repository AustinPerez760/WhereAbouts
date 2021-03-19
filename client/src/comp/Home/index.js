import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MapBox from "../MapBox";
import "./Home.css";

function Home({ signInScreen }) {
  return (
    <Container className="main-container">
      <Card id="home-card" bg={"danger"}></Card>
      <Row className="home-row">
        <Col>
          Adventures
          <Card className="adventure-card">rtsverfvsdfv</Card>
        </Col>
        <Col>Stops</Col>
        <Col>Share</Col>
      </Row>
    </Container>
    <div className="main-wrapper">
      <MapBox />
    </div>
  );
}

export default Home;
