import React, { useState, useEffect } from 'react';

const Card = ({ dog }) => {
  const [card, setCard] = useState({
    name: '',
    url: '',
  });

  useEffect(() => {
    const getDog = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(response.status);

        let [data] = await response.json();
        const newCard = {
          ...card,
          name: data['breeds'][0]['name'],
          url: data.url,
        };
        setCard(newCard);
      } catch (err) {
        console.error(err);
      }
    };
    if (dog !== null && dog !== '') {
      getDog(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${dog}`);
    }
  }, [dog]);

  return (
    <div className='card bounce'>
      <img src={card.url} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
