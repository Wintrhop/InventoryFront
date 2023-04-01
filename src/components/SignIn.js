import React, { useRef, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "../styles/components/SignIn.module.scss";
import axios from "axios";
import MyAlert from "./MyAlert";
import Swal from "sweetalert2";

const SignIn = ({ handleClose }) => {
  const [validated, setValidated] = useState(false);
  const [passVal, setPassVal] = useState(
    "ingrese una contraseña de 8 caracteres, una mayuscula una minuscula un numero y un caracter especial"
  );
  const passwordRegex = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
     
      
      try {
        const password = form.password.value;
        const email = form.email.value;

        const user = {
          email,
          password,
        };

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_INVENTORY_BACK_API}/auth/local/logIn`,
          user
        );
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          icon: "success",
          title: "Sesión iniciada",
        });
        
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("role", data.data.role);
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("org", data.data.org);


        handleClose();
      } catch (error) {
        
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al iniciar sesión revisa tus datos",
          icon: "error",
          confirmButtonText: "Perfecto",
        });
      }
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <FloatingLabel label="Correo Electronico" className="mb-3">
            <Form.Control
              required
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo electronico valido
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel label="Contraseña">
            <Form.Control
              id="password"
              type="password"
              placeholder="Contraseña"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              required
            />
            <Form.Control.Feedback type="invalid">
              {passVal}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button className={styles.signInBtn} variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
