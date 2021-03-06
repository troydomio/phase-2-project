import DataCard from './dataCard';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row} from 'react-bootstrap'


function DataContainer({ destinations, addNewDestination }) {
    return (
        <Container>
            <Row xs={3}>
                {destinations.map(destination=>
                 <DataCard key={destination.id} destination={destination}/>
                )}
            </Row>
        </Container>
        
    )
}

export default DataContainer