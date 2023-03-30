import React, { useRef } from 'react'
import {FloatingLabel, Form, Button} from 'react-bootstrap';
import styles from "../styles/components/SignIn.module.scss"


const SignIn = () => {
const handleSubmit = async (e)=>{
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
console.log(e.target[0].value)
}

  return (
    <>
    <Form onSubmit={(e)=>handleSubmit(e)}>
      <FloatingLabel
        controlId="floatingInput"
        label="Correo Electronico"
        className="mb-3"
      >
        <Form.Control value='email' id='email' type="email" placeholder="nombre@ejemplo.com" autoFocus />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control value='password' id='password' type="password" placeholder="Contraseña" />
      </FloatingLabel>
      <Button className={styles.signInBtn} variant="primary" type="submit">
      Iniciar Sesión
      </Button>
    </Form>
    </>
  )
}

export default SignIn