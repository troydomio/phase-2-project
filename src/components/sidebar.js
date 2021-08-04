import 'bootstrap/dist/css/bootstrap.css'
import {Button, Container, Row, Col} from 'react-bootstrap'


function Sidebar({filter, filter2}){
    return(
        <>
       <Container> 
           <Row>  
               <Col xs={10}>
                   <h3> Pick An Activity</h3>
               </Col>    
           </Row>
           
           <Row>
           <Button variant="outline-secondary" 
           onClick={()=>filter2('family')}>Family</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('park')}>Parks</Button>
            <Button variant="outline-secondary" 
           onClick={()=>filter2('hiking')}>Hiking</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('beach')}>Beaches</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('tour')}>Tours</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('shopping center')}>shopping</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('museum')}>Museums</Button>
           <Button variant="outline-secondary" 
           onClick={()=>filter('landmark')}>Landmarks</Button>
         </Row>
       </Container> 
        </>
    )
}

export default Sidebar