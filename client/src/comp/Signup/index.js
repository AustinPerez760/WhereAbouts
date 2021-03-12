import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import "./Signup.css";

function Signup({ signInScreen }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function userSignUp(e) {
    e.preventDefault();
    var signUpEmail = e.target[0].value;
    var signUpPassword = e.target[1].value;
    var userData = {
      email: signUpEmail.trim(),
      password: signUpPassword.trim(),
    };
    console.log(userData.email);

    if (!userData.email || !userData.password) {
      console.log("No Values Detected");
      setShow(true);
    } else {
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      })
        .then(window.location.reload())
        .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
      // alert(err.responseJSON);
      console.log(err);
    }
  }

  return (
    <Container>
      <Card className="login-card">
        <Card.Body>
          <Form onSubmit={userSignUp}>
            <Form.Group controlId="signupEmailInput">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="signupPasswordInput">
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
                signInScreen(false);
              }}
            >
              Sign In
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
    </Container>
  );
}

export default Signup;
