import 'bootstrap/dist/css/bootstrap.css'
import {Button, Container, Row, Col} from 'react-bootstrap'

function Sidebar(){

    function handleClick(e){
        console.log(e)
    }

    return(
        <>
       <Container> 
           <Row>
               
               <Col xs={10}>
                   <h3> Pick An Activity</h3>
               </Col>
               
           </Row>
           
           <Row>
           <Button variant="outline-secondary" onClick={handleClick}>Parks</Button>
        <Button variant="outline-secondary" onClick={handleClick}>Hiking</Button>
        <Button variant="outline-secondary"onClick={handleClick}>Museums</Button>
        <Button variant="outline-secondary" onClick={handleClick}>Shopping Centers</Button>
        <Button variant="outline-secondary" onClick={handleClick}>Rock Climbing</Button>
        <Button variant="outline-secondary"onClick={handleClick}>Water Park</Button>
        <Button variant="outline-secondary" onClick={handleClick}>Tours</Button>
           </Row>
       </Container>
        
        </>
    )
}

export default Sidebar