import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function LogIn({ signInScreen, setAuth }) {
  const [show, setShow] = useState(false);

  const [showLoginError, setShowLoginError] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseLogin = () => setShowLoginError(false);

  function userLogIn(e) {
    e.preventDefault();
    var loginEmail = e.target[0].value;
    var loginPassword = e.target[1].value;
    var userData = {
      email: loginEmail.trim(),
      password: loginPassword.trim(),
    };

    var config = {
      method: "post",
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(userData),
    };

    if (!userData.email || !userData.password) {
      console.log("No Values Detected");
      setShow(true);
    } else {
      axios(config)
        // fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: userData.email,
        //     password: userData.password,
        //   }),
        // })
        .then((res) => {
          console.log("Login Sucessful", res);
          if (res.statusText) {
            setAuth(true);
          }
        })
        .catch(function (err) {
          console.log("Username/Password mismatch");
          console.log(err);
          if (err) {
            setShowLoginError(true);
          }
        });
    }
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page

  return (
    <Container className="main-container">
      <Card className="login-card">
        <Card.Body>
          <Form onSubmit={userLogIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" size="xl">
              Submit
            </Button>
            <Button
              variant="secondary"
              type="signup"
              size="xl"
              onClick={(e) => {
                e.preventDefault();
                signInScreen(true);
              }}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>No Email and/or Password Detected!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter a valid email and password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showLoginError} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Email and/or Password Mismatched.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter a valid email and password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LogIn;
