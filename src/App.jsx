import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmpleadoList from './components/EmpleadoList'
import EmpleadoRow from './components/EmpleadoRow'
function App() {

  return (
    <>
      <Container className='my-5 paginaPrincipal'>
      <EmpleadoList>
        <EmpleadoRow></EmpleadoRow>
      </EmpleadoList>
      </Container>
      <footer className='bg-dark text-center text-light py-4'>
        <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App
