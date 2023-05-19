import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form , Button } from 'react-bootstrap';
const Formulario = () => {
    return (
        <section className='container fs-6 mt-4'>
            <Form>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre. Ej: Juan" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su DNI." />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su Email. Ej: juanperez@gmail.com" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Enviar
        </Button>
        </Form>
        </section>
    );
};

export default Formulario;