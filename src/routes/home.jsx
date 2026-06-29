import { createFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero';
import TodaysIceCream from '../components/TodaysIceCream';
import Promotions from '../components/Promotions';

export const Route = createFileRoute('/home')({
  component: Home,
});

function Home() {
  return (
    <div className='home'>
      <Hero />
      <TodaysIceCream/>
      <Promotions/>
    </div>
  );
}
