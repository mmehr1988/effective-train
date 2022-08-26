// ======================================
// EXTERNAL
// ======================================

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// ======================================
// INTERNAL
// ======================================

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <div className='app__brandName'>ONCUE</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end gap-3'
        >
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/invoice'>Invoice</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
