import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Container,Row,Col} from 'react-bootstrap'
import Carousell from './Carousell'

function Header() {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvpheaMLN23qpDsoaOFAo9oT6Qp3m2LIcAg&usqp=CAU"
    return (
     
        <>
      <Carousell/>
         <Container>
            <Row >
                <Col></Col>
                <Col>
        <Navbar bg="mywhite" variant="light">
          <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvpheaMLN23qpDsoaOFAo9oT6Qp3m2LIcAg&usqp=CAU"
           width="40"
           height="65"
            className="d-inline-block align-top"
        />{' '}
      
          </Navbar.Brand>
          
            <Navbar.Brand>
            <h1>Places To Visit In Texas</h1> 
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

{/* <Carousel  className="my-carousel">
       <Navbar className="my-nav" bg="light" variant="light">
    
    <Navbar.Brand href="#home">Yeehaw</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Navbar>
    
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Texas_landscape_3.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://res.cloudinary.com/simpleview/image/upload/v1546887606/clients/texas/PLACES_BigBend_H_LIST_Drive_3_4faccee3-36c0-48f3-87fe-658232567819.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-USA-TX-Austin-511136855-LMPphotography-copy.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.attractionsofamerica.com/images/travel/20190804093702_weekend-getaways-texas.jpg"
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel> */}