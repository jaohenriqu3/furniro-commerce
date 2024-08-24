import React from 'react';  
import "./home.css";  
import NavBar from '../../components/nav/navbar';
import Banner from '../../components/banner/banner';
import SearchSection from '../../components/searchSection/searchSection';
import BussinesSpecs from '../../components/bussinesSpecs/bussinesSpecs';
import leviosa from "../../assets/images/leviosa.png";   
import slytherine from "../../assets/images/slytherine.png"; 
import respira from "../../assets/images/respira.png"; 
import lolito from "../../assets/images/lolito.png";  
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
  return (
    <>
    <NavBar>
    </NavBar>
    <Banner> 
    </Banner>
    <SearchSection>
    </SearchSection>
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
          </div>

          <div className="pagination">
            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="next-btn">Next</button>
          </div>
        </div>
      </main>
      <BussinesSpecs>
      </BussinesSpecs>
      <Footer>
      </Footer>
    </>
  );
};

export default Home;
