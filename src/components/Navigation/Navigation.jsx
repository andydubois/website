import React from 'react';
import {Navbar, NavItem, Nav} from "react-bootstrap";

const Navigation = props => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='#home'>{" Andy DuBois"}</Navbar.Brand>
    <Navbar.Brand href='https://github.com/andydubois'>
      <img
        alt=''
        src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
        width='30'
        height='30'
        className='d-inline-block align-top'
      />
    </Navbar.Brand>
    <Navbar.Brand
      href='https://www.linkedin.com/in/andrewjdubois1/'
      target='_blank'>
      <img
        alt=''
        src='https://upload.wikimedia.org/wikipedia/commons/6/6d/LinkedinBlack.png'
        width='30'
        height='30'
        className='d-inline-block align-top'
      />
    </Navbar.Brand>
  </Navbar>
);

export default Navigation;
