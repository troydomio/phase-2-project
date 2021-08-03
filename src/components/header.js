import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col} from 'react-bootstrap'
// import SearchBar from './searchBar';

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

        {/* <SearchBar/> */}
            
             
            
        </>
    );

    // const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvpheaMLN23qpDsoaOFAo9oT6Qp3m2LIcAg&usqp=CAU"
    // return (
    //     <header>
    //        <img src={logo} style={{width:"150px", height:"150px", paddingLeft:"250px" }}/>
    //        <p style={{textAlign:"center",height: "25px", paddingTop:"1px", paddingRight:"100px", fontSize:"50px"}}>Things To Do In Texas</p>
    //     </header>

        // height: 100px; 
        // display: block; 
    // )
}

export default Header

{/* <div className="App-header"> */}
