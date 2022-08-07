import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarShow({ createProduto }) {

  const closeModal = () => {

  };

  const onCreateProduto = () => {

  };
  

  return (
    <>
    <Navbar fixed='top' bg="#14a7ff" variant="dark">
    <Container>
      <Navbar.Brand href="#home">  <img
              src='../../assets/logo/logo.png'
              alt='havaianas'
            /> </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Coleções</Nav.Link>
        <Nav.Link href="#">Produtos</Nav.Link>
        <Nav.Link href="#">Sobre Nós</Nav.Link>
      </Nav>
    </Container>
    <Nav className="d-flex">
            <Button variant="outline" onClick={() => createProduto(closeModal, onCreateProduto)}>Novo Produto</Button>
          </Nav>
  </Navbar>
  </>
  );
}

export default NavbarShow;
