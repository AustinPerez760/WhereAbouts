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
      <Card id="home-card">
        <div className="main-wrapper">
          <MapBox />
        </div>
      </Card>
      <Row className="home-row">
        <Col>
          Adventures
          <Card className="adventure-card">
            <dl>
              <dt>Yosemite</dt>
              <dd> Austin , Nicole, Pebbles</dd>
              <dt>Coast Trip</dt>
              <dd>Victor, Peter, Brian</dd>
              <dt>Big Sur</dt>
              <dd>Kaylee, Mike, Josh, Sarah, Alex, Christine</dd>
            </dl>
          </Card>
        </Col>
        <Col>
          Stops
          <Card className="adventure-card"></Card>
        </Col>
        <Col>Share</Col>
        <Card className="adventure-card"></Card>
      </Row>
    </Container>
  );
}

export default Home;
