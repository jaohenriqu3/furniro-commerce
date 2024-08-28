import { Link } from 'react-router-dom';  
import { useState } from 'react';
import { CartSidebar } from '../cart/cartSide';
import logo from "../../assets/images/logo.png";   
import user from "../../assets/icons/user.png";  
import shop from "../../assets/icons/cart.png";  
import '../nav/navbar.css' 

function NavBar() { 

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }; 
 
  return(
    <header>
    <div className="nav-container">
      <div className="logo">
      <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>
      <nav>
        <ul className="nav-links">
          <Link to='/'><li> Home </li></Link>
          <li><a href="#about"> About </a></li>
          <li><a href="#services"> Services </a></li>
          <li><a href="#contact"> Contact </a></li>
        </ul>
      </nav>
      <div className="icons">
        <Link to='/log-in'> <img src={user} alt="User" className='login-icon'/> </Link>
        <img src={shop} alt="Shop" onClick={toggleSidebar} />
      </div>
        {isSidebarOpen && <CartSidebar onClose={toggleSidebar} />}
    </div>
  </header> )
} 

export default NavBar