import DataCard from './dataCard';
// import SearchBar from './searchBar';
import Form from './form';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row} from 'react-bootstrap'


function DataContainer({destinations}) {
    return (
        <Container>
            <Row xs={3}>
                {destinations.map(destination=>
                 <DataCard key={destination.id} destination={destination}/>
                )
                
                }
            </Row>
           <Form />
           
        </Container>
        
    )
}

export default DataContainer