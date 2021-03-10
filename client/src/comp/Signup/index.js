import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Signup.css";

function Signup({ signInScreen }) {
  return (
    <Container>
      <Card className="login-card">
        <Card.Body>
          <Form>
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
                signInScreen(false);
              }}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signup;
