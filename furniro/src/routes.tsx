import { createBrowserRouter } from 'react-router-dom';  
import Home from './pages/Home/home';
import LoginPage from './pages/log-in/log-in';
import SignupPage from './pages/sing-up/sing-up';


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
  }
])



