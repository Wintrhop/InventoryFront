import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import MyModal from "./MyModal";
import SignIn from "./SignIn";

const AccountDropDown = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <NavDropdown title="Perfil" id="basic-nav-dropdown">
      <NavDropdown.Item onClick={handleShow}>inicia Sesion</NavDropdown.Item>
      <MyModal size ={"sm"} title={"Inicia Sesion"} show={show} handleClose={handleClose}>
        <SignIn handleClose={handleClose}/>
      </MyModal>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default AccountDropDown;
