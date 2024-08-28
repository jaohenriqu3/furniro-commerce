import React from 'react';  
import "./home.css";  

import NavBar from '../../components/nav/navbar';
import Banner from '../../components/banner/banner';
import SearchSection from '../../components/searchSection/searchSection';
import BussinesSpecs from '../../components/bussinesSpecs/bussinesSpecs';
import Footer from '../../components/footer/footer';

import ProductCard from '../../components/product-card/product-card';
import ProductCard2 from '../../components/product-card/cards/product-card2'; 
import ProductCard3 from '../../components/product-card/cards/product-card3';
import ProductCard4 from '../../components/product-card/cards/product-card4';

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
            <ProductCard>
            </ProductCard>
            <ProductCard2>
            </ProductCard2> 
            <ProductCard3>
            </ProductCard3> 
            <ProductCard4>
            </ProductCard4>

            <ProductCard>
            </ProductCard>
            <ProductCard2>
            </ProductCard2> 
            <ProductCard3>
            </ProductCard3> 
            <ProductCard4>
            </ProductCard4>

            <ProductCard>
            </ProductCard>
            <ProductCard2>
            </ProductCard2> 
            <ProductCard3>
            </ProductCard3> 
            <ProductCard4>
            </ProductCard4>

            <ProductCard>
            </ProductCard>
            <ProductCard2>
            </ProductCard2> 
            <ProductCard3>
            </ProductCard3> 
            <ProductCard4>
            </ProductCard4>
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
