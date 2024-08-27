import { Link } from 'react-router-dom';  
import logo from "../../assets/images/logo.png";   
import user from "../../assets/icons/user.png";  
import shop from "../../assets/icons/cart.png";  
import '../nav/navbar.css' 

function NavBar() {
  return(
    <header>
    <div className="container">
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
        <Link to='/log-in'> <img src={user} alt="User" /> </Link>
        <a href="#"><img src={shop} alt="Shop" /></a>
      </div>
    </div>
  </header> )
} 

export default NavBar