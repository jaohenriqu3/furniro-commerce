import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { CardHover } from './card-hover'; 
import slytherine from "../../assets/images/slytherine.png"; 
import './product-card.css'

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

const ProductCard: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar o hover
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/1`);
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
 
  return (
    <div
      className="card"
      key={product.id}
      onMouseEnter={() => setIsHovered(true)}  // Ativa o hover
      onMouseLeave={() => setIsHovered(false)} // Desativa o hover
    >
      <img alt={product.name} src={slytherine} />
      <div className="discount-circle">30%</div>
      <div className="card-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="price">
          <span className="main-price">{product.price}</span>
          <span className="discount-price">{product.discountPrice}</span>
        </div>
      </div>
      
      {isHovered && <CardHover productSlug={product.id} />} {/* Renderiza o hover */}
      
    </div>
  );
};

export default ProductCard;
