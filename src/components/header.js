import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col} from 'react-bootstrap'


function Header() {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvpheaMLN23qpDsoaOFAo9oT6Qp3m2LIcAg&usqp=CAU"
    return (
        <>
        <Container>
            <Row >
                <Col></Col>
                <Col>
        <Navbar bg="mywhite" variant="light">
            <Navbar.Brand>
                        <img src={logo}/>
            </Navbar.Brand> 
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand>
            <h1>Things To Do In Texas</h1> 
            </Navbar.Brand>
            
            </Navbar>
            </Col>
            <Col></Col>
            </Row>
        </Container>    
        </>
    );
}

export default Header


