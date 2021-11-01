import React, { useState, useEffect } from 'react';

const getData = async (url, setBreeds, setdogAleatorio) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    setBreeds(data);
    data.forEach((breed) => {
      breedsIDs.push(breed.id);
    });
    setdogAleatorio(breedsIDs);
  } catch (err) {
    console.error(err);
  }
};
const breedsIDs = [];

const Select = ({ setDog, setdogAleatorio }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getData('https://api.thedogapi.com/v1/breeds', setBreeds, setdogAleatorio);
  }, []);

  return (
    <select
      defaultValue=''
      onChange={(e) => {
        setDog(e.target.value);
      }}
    >
      <option value=''>Select an option</option>
      {breeds.map((breed) => {
        return (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
