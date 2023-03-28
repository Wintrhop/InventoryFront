import { Container, Nav, Navbar, NavDropdown, Modal, Button } from "react-bootstrap";

import Link from "next/link";
import React from "react";
import styles from "../styles/components/NavBar.module.scss";
import SignIn from "./SignIn";
import AccountDropDown from "./AccountDropDown";

const NavBr = () => {
  return (
    <>
      <Navbar className={styles.navBr} expand="lg">
        <Container>
          <Navbar.Brand href="/">Inventarios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Acerca de Nosotros</Nav.Link>
              
            </Nav>
            <Nav className="">
            <AccountDropDown/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBr;
