import DataContainer from './dataContainer';
import Sidebar from './sidebar';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import SearchBar from './searchBar';




function Body(){
    const [destinations, setDestinations] = useState([])
    const [search, setSearch]= useState("")
    const [button, setButton]= useState([])
   
    

    useEffect (()=>{
        fetch('http://localhost:3000/destinations')
       .then(r => r.json())
        .then(destinations => setDestinations(destinations))
    },[])

   
   

    const searchItems = destinations.filter((card) => {
        return card.name.toLowerCase().includes(search.toLowerCase())
    })

    function addNewDestination(newDestination) {
        fetch('http://localhost:3000/destinations',{
            method:"POST", headers:{
                'Content-Type':'application/json'
            }, body: JSON.stringify(newDestination)
        }).then(r => r.json())
            .then(newDestination => { setDestinations([...destinations, newDestination]) })
    }

    return(
        <div className="body">
            <Container>
                <Row xs={5}>
                    <Col lg={{ span: 6, offset: 3 }} >
                         <SearchBar 
                         setSearch={setSearch}
                         />
                    </Col> 
                 </Row>
                
                <Row style={{ textAlign:"center", paddingTop:"50px" }}>
                    <Col xs={2}>
                        <Sidebar className="body-element" 
                            setButton={setButton}
                            destinations={destinations}
                        />
                    </Col>
                    <Col>
                        <DataContainer className="body-element"
                            destinations={button.length >= 1 ? button : (searchItems || destinations)} 
                            addNewDestination={addNewDestination}
                        />    
                    </Col>    
                  
                </Row>
            </Container>
        </div>   
    )}
          
export default Body
