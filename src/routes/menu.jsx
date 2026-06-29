import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: Menu,
})

function Menu() {
 return <h1>menu here</h1>
}
