import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'


const redirect = sessionStorage.redirect
if (redirect) {
  delete sessionStorage.redirect
  window.history.replaceState(null, '', redirect)
}

const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  basepath: import.meta.env.DEV ? '/' : '/the-cream-cat',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)