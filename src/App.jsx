import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TituloFormulario from './components/TituloFormulario'
import Formulario from './components/Formulario'
function App() {

  return (
    <>
     <Container className='container-fluid text-center bg-success'>
      <TituloFormulario></TituloFormulario>
     </Container>
      <Container className='main'>
        <Formulario></Formulario>
      </Container>
      <footer className='bg-dark text-light py-4 text-center'>
        <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App
