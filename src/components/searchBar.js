function SearchBar({setSearch}) {
    function handleChange(e){
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    return (
        <div className="search">
            <label htmlFor="search">Search Destination:</label>
            <input
                type="text"
                id="search"
                placeholder="Enter Name..."
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar