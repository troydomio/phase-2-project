import DataContainer from './dataContainer';
import Sidebar from './sidebar';
import {useState, useEffect} from 'react'


function Body(){
    const [destinations, setDestinations] = useState([])
    const [search, setSearch] = useState("")


    useEffect (()=>{
        fetch('http://localhost:3000/destinations')
       .then(r => r.json())
        .then(destinations => setDestinations(destinations) )
      },[])
    //   console.log(destinations)

    const searchItems = destinations.filter((card) => {
        return card.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div className="body">
            <Sidebar className="body-element-1" />
            <hr/>
            <DataContainer 
                className="body-element-2" 
                destinations={searchItems || destinations} 
                setSearch={setSearch}
            />
        </div>
    )
}

export default Body
