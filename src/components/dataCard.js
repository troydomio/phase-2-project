function DataCard({ card }) {
    // console.log(card)
    return (
        <div className="card">
            <li className="cards__item">
                <img
                    src={card.image}
                    alt={card.name}
                    className="card__image"
                    // onClick={handleClick}
                />
                <h1>{card.name}</h1>
                <p>{card.location}</p>
                <p>{card.description}</p>
            </li>
        </div>
    )
}
export default DataCard