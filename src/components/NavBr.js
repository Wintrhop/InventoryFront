import { Container, Nav, Navbar } from "react-bootstrap";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/NavBar.module.scss";
import AccountDropDown from "./AccountDropDown";
import ConditionalRenderToken from "./ConditionalRenderToken";
import { useSelector } from "react-redux";

const NavBr = (props) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const reduxToken = useSelector((state) => state.auth.token);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    const roleUser = localStorage.getItem("role");
    if (roleUser === "admin") setRole("Administrador");
    if (roleUser === "client") setRole("Cliente");
    if (roleUser === "projectWorker") setRole("Contratista");
    if (roleUser === "support") setRole("Soporte");
  }, [reduxToken]);

  useEffect(() => {
    if (!loaded) {
      if (!reduxToken) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("org");
      }
      setLoaded(true);
    }
  }, []);
  return (
    <>
      <Navbar
        className={`${styles.navBr} w-75 p-3 position-relative top-0 start-50 translate-middle-x`}
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/" as={Link}>
            Inventarios
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" as={Link}>
                Acerca de Nosotros
              </Nav.Link>
              <ConditionalRenderToken
                childrenOnline={
                  <>
                    <Nav.Link href="/controllPanel" as={Link}>
                      Panel de {role}
                    </Nav.Link>
                  </>
                }
              />
            </Nav>
            <Nav className="ms-auto">
              <ConditionalRenderToken
                className={`${styles.nameFlex}`}
                childrenOnline={`Hola ${userName}`}
              />
              <AccountDropDown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBr;
