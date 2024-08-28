import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../../components/nav/navbar';
import Footer from '../../../components/footer/footer';
import star from "../../../assets/icons/star.png";
import arrow from "../../../assets/icons/arrow.png";
import twitter from "../../../assets/icons/twitterblack.png";
import linkedin from "../../../assets/icons/linkedinblack.png";
import facebook from "../../../assets/icons/facebookblack.png";
import { useCart } from '../../../components/cart/cartContext'; 
import '../single-product.css'; 
import leviosa from '../../../assets/images/leviosa.png';

interface Product {
  id: string;
  name: string;
  price: string;
  discountPrice: string;
  description: string;
  category: string;
  size: string;
  sku: string;
  tag: string;
  imageURL: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart(); // Usando o contexto do carrinho

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/2`);
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price, 
      quantity: 1, 
    });
  };

  return (
    <>
      <NavBar />
      <section className="search-section">
        <div className="search-left">
          <span>Home</span>
          <img src={arrow} alt="Arrow" />
          <span>Shop</span>
          <img src={arrow} alt="Arrow" />
          <span className='divitor-bar'>|</span>
          <span>{product.name}</span>
        </div>
      </section>

      <div className="product-page">
        <div className="product-images">
          <div className="image-container">
            <img src={leviosa} alt={product.name} />
          </div>
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">Rs. {product.price}</p>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i className="fas fa-star" key={index}><img src={star} alt="Star" /></i>
            ))}
            <span className="review-count">5 Customer Review</span>
          </div>
          <p className="description">{product.description}</p>
          <div className="options">
            {/* Implementar lógica para escolher tamanhos e cores, se necessário */}
          </div>
          <div className="quantity-container">
            <button className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>
          </div>
          <h3 className='divider'>____________________________________________________</h3>
          <div className="product-info">
            <p className="sku">SKU: {product.sku}</p>
            <p className="category">Category: {product.category}</p>
            <p className="tags">Tags: {product.tag}</p>
            <div className='share-icons'>
            <p className="share"> Share:  </p>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="" />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="" />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
