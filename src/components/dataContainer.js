import DataCard from './dataCard';
import SearchBar from './searchBar';
import Form from './form';


function DataContainer({ destinations, setSearch }) {
    return (
        <div>
            <SearchBar setSearch={setSearch} />
            {destinations.map((card) => <DataCard card={card} key={card.id} />)}

            <Form />
        </div>
    )
}

export default DataContainer