import { createFileRoute } from '@tanstack/react-router';
import { CartContext } from '../components/context';
import { useContext } from 'react';

export const Route = createFileRoute('/cart')({
  component: Cart,
});

function Cart() {
  const [cart] = useContext(CartContext);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.price;
  }

  return (
    <div className='cart'>
      <h2>My Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className='name'>{item.name}</span>
            <span className='price'>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className='total'>Total: ${total}</p>
      <button>Checkout</button>
    </div>
  );
}
