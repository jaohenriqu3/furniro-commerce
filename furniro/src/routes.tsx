import { createBrowserRouter } from 'react-router-dom';  
import Home from './pages/home/home';
import LoginPage from './pages/log-in/log-in';
import SignupPage from './pages/sing-up/sing-up';
import SingleProduct from './pages/single-product/single-product'; 
import CartPage from './pages/cart/cartPage';
import Checkout from './pages/checkout/checkout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },
  {
    path: '/log-in', element: <LoginPage /> 
  },
  {
    path: '/sing-up', element: <SignupPage />
  },
  {
    path: '/single-product', element: <SingleProduct />
  },
  {
    path: '/cart-page', element: <CartPage/>
  },
  {
    path: '/checkout', element: <Checkout/>
  }
])



