import React from "react";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import MapBox from "../MapBox";
import "./Home.css";

function Home({ username }) {
  return (
    <Container className="main-container">
      <div className="main-wrapper">
        <MapBox username={username} />
      </div>
      {/* //   <Row className="home-row">
    //     <Col>
    //       Adventures
    //       <Card className="adventure-card">
    //         <dl>
    //           <dt>Yosemite</dt>
    //           <dd> Austin , Nicole, Pebbles</dd>
    //           <dt>Coast Trip</dt>
    //           <dd>Victor, Peter, Brian</dd>
    //           <dt>Big Sur</dt>
    //           <dd>Kaylee, Mike, Josh, Sarah, Alex, Christine</dd>
    //         </dl>
    //       </Card>
    //     </Col>
    //     <Col>Stops</Col>
    //     <Card className="adventure-card"> </Card>
    //     <Col>Share</Col>
    //     <Card className="adventure-card"></Card>
    //   </Row> */}
    </Container>
  );
}

export default Home;
