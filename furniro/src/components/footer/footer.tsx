import './footer.css'
import logo2 from "../../assets/images/logo.png"; 
import { Link } from 'react-router-dom'; 


const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo2} alt="Logo" />
            </div>
            <p className="footer-description">
              Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São Paulo - SP, 04717-004
            </p>
            <p className="footer-info">2024 Compass UOL</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <Link to='/single-product'> <li>Shop</li></Link>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Help</h3>
              <ul>
                <li><a href="#payment-options">Payment Options</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#privacy-policies">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter Your Email Address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer 