import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { CartProvider } from './components/cart/cartContext'

export function App() {
  return (
    <CartProvider>
    <RouterProvider router={router} /> 
    </CartProvider>
  )
}