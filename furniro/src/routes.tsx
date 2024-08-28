import { createBrowserRouter } from 'react-router-dom';  
import Home from './pages/home/home';
import LoginPage from './pages/log-in/log-in';
import SignupPage from './pages/sing-up/sing-up';
import SingleProduct from './pages/single-product/single-product'; 
import SingleProduct2 from './pages/single-product/products-page/single-product2'; 
import SingleProduct3 from './pages/single-product/products-page/single-product3';
import SingleProduct4 from './pages/single-product/products-page/single-product4';
import CartPage from './pages/cart/cartPage';
import Checkout from './pages/checkout/checkout'; 
import ProductCard from './components/product-card/product-card'; 

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
  }, 
  {
    path: '/product-card', element: <ProductCard/>
  },
  {
    path: '/single-product2', element: <SingleProduct2 />
  },
  {
    path: '/single-product3', element: <SingleProduct3 />
  },
  {
    path: '/single-product4', element: <SingleProduct4 />
  },
])



