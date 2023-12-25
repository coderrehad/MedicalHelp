import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function AppNavbar() {
    return (
        <>
            <Navbar expand="lg" className="bg-white">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 gap-4"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='nav_item' href="">Home</Nav.Link>
                            <Nav.Link className='nav_item' href="">Our Products</Nav.Link>
                            <Nav.Link className='nav_item' href="">Health Advice</Nav.Link>
                            <Nav.Link className='nav_item' href="">About Us</Nav.Link>
                            <Nav.Link className='nav_item' href="">Pharmacy Locator</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="primary">Find Flyer</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavbar;