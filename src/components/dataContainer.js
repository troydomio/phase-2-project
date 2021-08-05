import DataCard from './dataCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './form';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row} from 'react-bootstrap'


function DataContainer({ destinations, addNewDestination }) {
    return (
        <Container>
            <Row xs={3}>
                {destinations.map(destination=>
                 <DataCard key={destination.id} destination={destination}/>
                )
                
                }
            </Row>
            {/* <Form addNewDestination={ addNewDestination } /> */}
            <Router>
            <Switch>
            <Route path="/create" exact render={() => <Form addNewDestination={addNewDestination} />} />
            </Switch>
            </Router>
           
        </Container>
        
    )
}

export default DataContainer