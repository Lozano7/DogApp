import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Select from './components/Select';

function App() {
  const [dog, setDog] = useState(null);
  const [dogAleatorio, setdogAleatorio] = useState([]);

  useEffect(() => {
    if (dogAleatorio.length > 0) {
      setDog(dogAleatorio[Math.floor(Math.random() * dogAleatorio.length)]);
    }
  }, [dogAleatorio]);

  return (
    <div className='app'>
      <h1>Dog Search</h1>
      <Select setDog={setDog} setdogAleatorio={setdogAleatorio} />
      <Card dog={dog} />
    </div>
  );
}

export default App;
