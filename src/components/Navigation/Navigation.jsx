import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class Navigation extends Component {

  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand className="nameHeader" href='#/'>{" Andy DuBois"}</Navbar.Brand>
        {this.props.page==='home' ? (
          <Nav.Link href='#/portfolio' onClick={this.goToProjectsPage}>
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
  }
}

export default Navigation;
