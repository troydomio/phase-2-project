import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col, Nav,Carousel} from 'react-bootstrap'

const Navvbar = () => {
    return (
        <div>
             <Navbar className="justify-content-center">
             <Navbar.Brand href="/">
      <img
        src="https://i.pinimg.com/originals/30/cc/b7/30ccb745e6bc9fee7a778af55b405af1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
            <Navbar.Brand href="/">TravelTex</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>


            <Nav.Link href="/create">Create New +</Nav.Link>

            <Nav>    
          </Nav>
        </Navbar>
        </div>
    )
}

export default Navvbar
