import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../images/logo.jpg'

function Header(props) {
  return (
    <div className="container tt-nav bg-w">

      <Navbar collapseOnSelect expand="lg" variant="light">
        
        <Navbar.Brand  href="/home">
          <Col>
            <Row><Col><img src={logo} width="60rem" height="60rem" /></Col><Col className="tt-logo-h align-self-center">The Tuition</Col></Row>
            {/* <Row className="tt-logo-ss">The way to prepare yourself</Row> */}
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;