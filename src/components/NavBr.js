import { Container, Nav, Navbar, NavDropdown, Modal, Button } from "react-bootstrap";

import Link from "next/link";
import React from "react";
import styles from "../styles/components/NavBar.module.scss";
import SignIn from "./SignIn";
import AccountDropDown from "./AccountDropDown";

const NavBr = () => {
  return (
    <>
      <Navbar className={`${styles.navBr} w-75 p-3 position-relative top-0 start-50 translate-middle-x`} expand="sm">
        <Container>
          <Navbar.Brand href="/">Inventarios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Acerca de Nosotros</Nav.Link>
              
            </Nav>
            <Nav className="ms-auto">
            <AccountDropDown/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBr;
