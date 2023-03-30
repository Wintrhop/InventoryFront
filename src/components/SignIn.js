import React, { useRef, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "../styles/components/SignIn.module.scss";

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [passVal, setPassVal] = useState(null);
  const passwordRegex = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const password = form.password.value;
    if (!passwordRegex.test(password)) {
      setPassVal("Ingrese una contraseña de 8 digitos");
      setValidated(false);
    }
    setValidated(true);
    const email = form.email.value;

    const data = {
      email,
      password,
    };
    console.log(data);
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
