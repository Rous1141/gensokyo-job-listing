import './App.css'
import { routes } from './router/Route'
import { RouterProvider } from 'react-router'

function App() {
  const router = routes
  return (
    <RouterProvider router={router} />
  )
}

export default App
