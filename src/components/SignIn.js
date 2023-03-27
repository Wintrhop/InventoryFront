import React from 'react'
import {FloatingLabel, Form, Button} from 'react-bootstrap';


const SignIn = () => {
  return (
    <>
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Correo Electronico"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="nombre@ejemplo.com" autoFocus />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control type="password" placeholder="Contraseña" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
      Iniciar Sesión
      </Button>
    </Form>
    </>
  )
}

export default SignIn