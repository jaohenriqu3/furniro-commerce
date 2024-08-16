import React from 'react';  
import "./home.css";  
import logo from "../../assets/images/logo.png";   
import user from "../../assets/icons/user.png";  
import shop from "../../assets/icons/cart.png";  
import filter from "../../assets/icons/filter.png"; 
import four from "../../assets/icons/four.png"; 
import horizoltal from "../../assets/icons/horizontal.png";   
import leviosa from "../../assets/images/leviosa.png";   
import slytherine from "../../assets/images/slytherine.png"; 
import respira from "../../assets/images/respira.png"; 
import lolito from "../../assets/images/lolito.png";  
import trophy from "../../assets/icons/trophy.png";  
import guarantee from "../../assets/icons/guarantee.png";  
import shipping from "../../assets/icons/shipping.png";  
import customerSupport from "../../assets/icons/customer-support.png";  
import logo2 from "../../assets/images/logo.png";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home"> Home </a></li>
              <li><a href="#about"> About </a></li>
              <li><a href="#services"> Services </a></li>
              <li><a href="#contact"> Contact </a></li>
            </ul>
          </nav>
          <div className="icons">
            <a href="#"><img src={user} alt="User" /></a>
            <a href="#"><img src={shop} alt="Shop" /></a>
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="banner-content">
          <h1>Shop</h1>
          <p><b>Home | </b> Shop</p>
        </div>
      </section>
      <section className="search-section">
        <div className="search-left">
          <img src={filter} alt="Filter Icon" className='filter-icon' />
          <span>Filter</span>
          <img src={four} alt="Four Icon" className='exibition-icon' /> 
          <img src={horizoltal} alt="Horizontal Icon" className='exibition-icon' /> 
          <span className='filter-results'>| Showing 1–16 of 32 results</span>
        </div>
        <div className="search-right">
          <span>Show</span>
          <input type="number" value={16} min={1} /> 
          <span>Short By</span>
          <input type="text" placeholder='Default'/>
        </div> 
      </section>

      <main>
        <div className="main-content">
          <div className="product-cards"> 
            <div className="card">
              <img src={slytherine} alt="Product 1" />
              <div className="discount-circle">30%</div>
              <div className="card-info">
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div className="price">
                  <span className="main-price">Rp2.500.000</span>
                  <span className="discount-price">Rp 3.500.000</span>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={leviosa} alt="Product 2" />
              <div className="card-info">
                <h2>Leviosa</h2>
                <p>Stylish cafe chair</p>
                <div className="price">
                  <span className="main-price">Rp2.500.000</span>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={lolito} alt="Product 1" />
              <div className="discount-circle">30%</div>
              <div className="card-info">
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div className="price">
                  <span className="main-price">Rp7.000.000</span>
                  <span className="discount-price">Rp 14.000.000</span>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={respira} alt="Product 1" />
              <div className="discount-circle-new">New</div>
              <div className="card-info">
                <h2>Respira</h2>
                <p>Outdoor bar table and stool</p>
                <div className="price">
                  <span className="main-price">Rp2.500.000</span>
                </div>
              </div>
            </div>

            {/* Mais cards aqui... */}
          </div>

          <div className="pagination">
            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="next-btn">Next</button>
          </div>
        </div>
      </main>

      <section className="business-specs">
        <div className="spec">
          <img src={trophy} alt="Spec Icon" />
          <div className="spec-content">
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="spec">
          <img src={guarantee} alt="Spec Icon" />
          <div className="spec-content">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="spec">
          <img src={shipping} alt="Spec Icon" />
          <div className="spec-content">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="spec">
          <img src={customerSupport} alt="Spec Icon" />
          <div className="spec-content">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>

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
                <li><a href="#">Shop</a></li>
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
    </>
  );
};

export default Home;
