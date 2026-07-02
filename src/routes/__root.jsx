import { useState } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '../components/Header';
import { CartContext } from '../components/context';

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);

    return (
      <CartContext.Provider value={cartHook}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    );
  },
});
