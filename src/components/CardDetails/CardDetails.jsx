import { useEffect, useState } from "react";
import Card from "../Card/Card";


const CardDetails = () => {
    const [cards,setCards] = useState([]);
    useEffect(() => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCards(data));

    },[]);

    return (
      <div>
        <h1>card:{cards.length}</h1>
        <div className="grid">
          {cards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    );
};

export default CardDetails;