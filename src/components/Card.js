import React, { useState, useEffect } from 'react';

const getDog = async (url, card, setCard) => {
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

const Card = ({ dog }) => {
  const [card, setCard] = useState({
    name: '',
    url: '',
  });

  useEffect(() => {
    if (dog !== null && dog !== '') {
      getDog(
        `https://api.TheDogAPI.com/v1/images/search?breed_ids=${dog}`,
        card,
        setCard
      );
    }
  }, [dog]);

  return (
    <div
      className='card bounce'
      onClick={() => {
        getDog(
          `https://api.TheDogAPI.com/v1/images/search?breed_ids=${dog}`,
          card,
          setCard
        );
      }}
    >
      <img src={card.url} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
