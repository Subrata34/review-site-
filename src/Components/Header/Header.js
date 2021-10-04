
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';


const Header = () => {
    return (
        <div className="navigation-bar"> 
        <h1> <span className="text-warning">Softare Designar</span> in bangladesh </h1>
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;