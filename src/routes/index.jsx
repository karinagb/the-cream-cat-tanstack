import { createFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero';
import TodaysIceCream from '../components/TodaysIceCream';
import Promotions from '../components/Promotions';
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [iceCreams, setIceCreams] = useState([]);

  async function fetchIceCreams() {
    const response = await fetch('/api/iceCreams.json');
    const data = await response.json();

    setIceCreams(data);
  }

  useEffect(() => {
    fetchIceCreams();
  }, []);

  const randomId1 = Math.floor(Math.random() * 10) + 1;
  const randomId2 = Math.floor(Math.random() * 10) + 1;

  const todaysIceCream = iceCreams.find((iceCream) => iceCream.id === randomId1);

  const promoIceCream = iceCreams.find((iceCream) => iceCream.id === randomId2);

  return (
    <div className='home'>
      <Hero />
      {iceCreams.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <TodaysIceCream
            key={todaysIceCream.id}
            image={`/assets/ice-creams/${todaysIceCream.image}`}
            name={todaysIceCream.name}
            description={todaysIceCream.description}
            price={todaysIceCream.price}
          />
          <Promotions
            key={promoIceCream.id}
            image={`/assets/ice-creams/${promoIceCream.image}`}
            name={promoIceCream.name}
            price={promoIceCream.price}
          />
        </>
      )}
    </div>
  );
}
