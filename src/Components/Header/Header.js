
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';


const Header = () => {
    return (
        <div className="navigation-bar"> 
        <h1> <span className="text-warning">Softare Designar</span> in the World</h1>
        <Navbar bg="black" variant="dark">
        <Container>
        <Nav.Link  to=" /">Home</Nav.Link>
        <Nav className="me-auto">
          
          <Nav.Link to="/about">About </Nav.Link>
          <Nav.Link to="/services">Services</Nav.Link>
          <Nav.Link to="/documents">Documents</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;