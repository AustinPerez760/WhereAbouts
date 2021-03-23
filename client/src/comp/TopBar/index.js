import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./TopBar.css";

function TopBar({ setAuth }) {
  return (
    <Navbar className="justify-content-between" variant="dark" expand="lg">
      <Navbar.Brand href="/">WhereAbouts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="home" href="home">
            Home
          </Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="logout">Logout</Nav.Link>
        </Nav>
        {/* <Form style={{ flex: 1 }}>
          <Form.Row className="mx-auto">
            <Col xs={9} className="search-bar">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
            <Button xs={3} variant="outline-success">
              Search
            </Button>
          </Form.Row>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
