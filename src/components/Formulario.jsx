import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form , Button } from 'react-bootstrap';
import { useState } from 'react';
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [dni, setDNI] = useState('');
  const [email, setEmail] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault()
    
  }

  const controlInput = () => {
    if(nombre.length && dni.length && email.length > 0)
    {
      alert('Datos enviados')
      setNombre('');
      setDNI('');
      setEmail('');
    }
    else{
      alert('Completar todos los datos')
    }
  }

    return (
        <section className='container fs-6 mt-4'>
            <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre. Ej: Juan" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su DNI." onChange={(e) => setDNI(e.target.value)} value={dni} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su Email. Ej: juanperez@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={controlInput}>
        Enviar
        </Button>
        </Form>
        </section>
    );
};

export default Formulario;