import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import MyModal from "./MyModal";
import SignIn from "./SignIn";
import ConditionalRenderToken from "./ConditionalRenderToken";
import { useDispatch } from "react-redux";
import { changeName, changeRole, changeToken } from "@/store/slices/authSlice";

const AccountDropDown = ({ tokenExpired }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("org");
    dispatch(changeName(''));
    dispatch(changeRole(''));
    dispatch(changeToken(''));}
  return (
    <NavDropdown title="Perfil" id="basic-nav-dropdown">
      <ConditionalRenderToken
        childrenOffline={
          <>
            <NavDropdown.Item onClick={handleShow}>
              inicia Sesion
            </NavDropdown.Item>
            <MyModal
              size={"sm"}
              title={"Inicia Sesion"}
              show={show}
              handleClose={handleClose}
            >
              <SignIn handleClose={handleClose} />
            </MyModal>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </>
        }
        childrenOnline={
          <>
            <NavDropdown.Item onClick={logout}>Cerrar Sesión</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Perfil
            </NavDropdown.Item>
          </>
        }
      />
    </NavDropdown>
  );
};

export default AccountDropDown;
