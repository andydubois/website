import React from 'react';
import {Navbar, NavItem, Nav} from "react-bootstrap";

const Navigation = props => (
  <Nav fill variant='tabs' defaultActiveKey='#/' className="navigation">
    <Nav.Item>
      <Nav.Link href='#/'>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='#/portfolio' eventKey='portfolio'>Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='#/contact' eventKey='contact'>Contact</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navigation;
