import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../images/logo.jpg';

import {Link} from 'react-scroll';

function Header(props) {
  return (
    <div className="container tt-nav bg-w">

      <Navbar collapseOnSelect expand="lg" variant="light">
        
        <Navbar.Brand  href="/home">
          <Col>
            <Row><Col><img src={logo} width="60rem" height="60rem" alt="logo"/></Col><Col className="tt-logo-h align-self-center">The Tuition</Col></Row>
            {/* <Row className="tt-logo-ss">The way to prepare yourself</Row> */}
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link><Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Nav.Link>
            <Nav.Link><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Nav.Link>
            <Nav.Link><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;