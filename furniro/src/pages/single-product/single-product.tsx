import './single-product.css';    
import { Link } from 'react-router-dom';


import slytherine from "../../assets/images/slytherine.png";     
import star from "../../assets/icons/star.png";   
import arrow from "../../assets/icons/arrow.png";  

import NavBar from '../../components/nav/navbar'; 
import Footer from '../../components/footer/footer' 

const ProductPage = () => {
  return ( 
    <>
    <NavBar> 
    </NavBar>
    <section className="search-section">
        <div className="search-left">
          <span>Home</span> 
          <img src={arrow} alt="" /> 
          <span>Shop</span>  
          <img src={arrow} alt="" /> 
          <span className='divitor-bar'>|</span> 
          <span> Product name </span>
        </div>
      </section>

    <div className="product-page">
      <div className="product-images">
        <div className="image-container">
        <img src={slytherine} alt="Sofa 1" />
        </div>
      </div>
      <div className="product-details">
        <h1>Asgaard sofa</h1>
        <p className="price">Rs. 250,000.00</p>
        <div className="rating">
          <i className="fas fa-star"> <img src={star} alt="" /></i>
          <i className="fas fa-star"> <img src={star} alt="" /></i>
          <i className="fas fa-star"> <img src={star} alt="" /></i>
          <i className="fas fa-star"> <img src={star} alt="" /></i>
          <i className="fas fa-star"> <img src={star} alt="" /></i>
          <span className="review-count">5 Customer Review</span>
        </div>
        <p className="description">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced
          audio which boasts a clear midrange and extended highs for a
          sound.
        </p>
        <div className="options">
          <div className="option-group">
            <label htmlFor="size">Size</label>
            <div className="size-options"> 
              <button className="size-button">L</button>
              <button className="size-button">XL</button>
              <button className="size-button">XS</button> 
            </div>
          </div>
          <div className="option-group">
            <label htmlFor="color">Color</label>
            <div className="color-options">
              <button className="color-option1" ></button>
              <button className="color-option2" ></button>
              <button className="color-option3" ></button>
            </div>
          </div>
          <div className="quantity-container">
            <div className='quantity-counter'> 
            <button className="quantity-button">-</button>
            <input type="number" className="quantity-input" value="1" />
            <button className="quantity-button">+</button>  
            </div>
            <Link to='/cart-page'><button className="add-to-cart">Add To Cart</button></Link> 
          </div>

          <div className='divider'></div>
        </div>
        <div className="product-info">
          <p className="sku">SKU: SS001</p>
          <p className="category">Category: Sofas</p>
          <p className="tags">Tags: Sofa, Chair, Home, Shop</p>
          <p className="share">Share:  
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </p>
        </div>
      </div>
    </div>

    <Footer> 
    </Footer>
    </>
  );
};

export default ProductPage; 