import Card from "./Card.jsx";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards?.length > 0 &&
        cards.map((card, index) => (
          <Card
            key={index}
            src={`https://robohash.org/${card.id}?set=set2&size=180x180`}
            name={card.name}
            email={card.email}
          />
        ))}
    </div>
  );
};

export default CardList;
