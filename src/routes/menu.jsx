import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import IceCream from '../components/IceCream';

export const Route = createFileRoute('/menu')({
  component: Menu,
});

function Menu() {
  const [iceCreams, setIceCreams] = useState([]);

  async function fetchIceCreams() {
    const response = await fetch('/api/iceCreams.json');
    const data = await response.json();

    setIceCreams(data);
  }

  useEffect(() => {
    fetchIceCreams();
  }, []);

  return (
    <div className='menu'>
      <h1>The Cream Cat Menu</h1>

      <div className='human-ice-cream'>
        <h2>Humans</h2>
        <div className='ice-creams'>
          {iceCreams
            .filter((iceCream) => iceCream.category === 'human')
            .map((iceCream) => (
              <IceCream
                key={iceCream.id}
                image={`/assets/ice-creams/${iceCream.image}`}
                name={iceCream.name}
                description={iceCream.description}
                price={iceCream.price}
              />
            ))}
        </div>
      </div>

      <div className='pet-ice-cream'>
        <h2>Pets</h2>
        <div className='ice-creams'>
          {iceCreams
            .filter((iceCream) => iceCream.category === 'pet')
            .map((iceCream) => (
              <IceCream
                key={iceCream.id}
                img={iceCream.image}
                name={iceCream.name}
                description={iceCream.description}
                price={iceCream.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
