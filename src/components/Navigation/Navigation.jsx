import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class Navigation extends Component {

  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        {this.props.page === "home" ? (
          <Nav.Link
            className='navBar'
            href='#/portfolio'
            onClick={this.goToProjectsPage}>
            Projects
          </Nav.Link>
        ) : (
          <Nav.Link href='#/' onClick={this.goToHomePage}>
            Home
          </Nav.Link>
        )}

        <Navbar.Brand href='https://github.com/andydubois' target='_blank'>
          <img
            alt=''
            src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
            width='40'
            height='40'
            className='d-inline-block align-top'
          />
          <small>GitHub</small>
        </Navbar.Brand>
        <Navbar.Brand
          href='https://www.linkedin.com/in/andrewjdubois1/'
          target='_blank'>
          <img
            alt=''
            src='https://upload.wikimedia.org/wikipedia/commons/6/6d/LinkedinBlack.png'
            width='40'
            height='40'
            className='d-inline-block align-top'
          />
          <small>LinkedIn</small>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigation;
