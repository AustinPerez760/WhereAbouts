import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import testPic from "../../assets/images/client/src/assets/images/sunset.jpg";

function About() {
  return (
    <Container>
      <h1>About</h1>
      <Row>
        <Col>
          1 of 3
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          2 of 3
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Usage</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          3 of 3
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Future</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <section className="sec1">
    //   <div className="main-container">
    //     <h3>Our Mission</h3>
    //     <div className="post-wrapper">
    //       <div>
    //         <div className="post">
    //           <img className="thumbnail" />
    //           <div className="post-preview">
    //             <h6 className="post-title">About</h6>
    //             <p className="post-intro"></p>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="post">
    //           <img className="thumbnail" />
    //           <div className="post-preview">
    //             <h6 className="post-title">Usage</h6>
    //             <p className="post-intro"></p>
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="post">
    //           <img className="thumbnail" />
    //           <div className="post-preview">
    //             <h6 className="post-title">Future Updates</h6>
    //             <p className="post-intro"></p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default About;
