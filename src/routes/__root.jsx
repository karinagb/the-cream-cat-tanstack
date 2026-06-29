import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/Header'
import Hero from '../components/Hero'

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  },
})