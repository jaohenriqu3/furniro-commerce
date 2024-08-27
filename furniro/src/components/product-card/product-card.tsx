import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';


import Compare from '../../assets/icons/compare.png'
import Like from '../../assets/icons/like.png'
import Share from '../../assets/icons/share.png'


// Definindo a interface Product com as propriedades esperadas

// ADICIONAR DISCOINT PRICE NO MODEL -> SCHEMA.PRISMA
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
  // Usando a interface Product para tipar o estado dos produtos
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        const data: Product[] = await response.json(); // Aplicando a tipagem dos dados recebidos
        setProducts(data); // Armazenando os produtos no estado
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
                    <div className="card" key={product.id}>
                    <img alt="Product 1" key={product.imageURL} />
                    <div className="discount-circle">30%</div>
                    <div className="card-info">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <div className="price">
                        <span className="main-price">{product.price}</span>
                        <span className="discount-price">{product.discountPrice}</span>
                      </div>
                    </div>
                  </div>
      ))}
    </div>
  );
};

interface CardHoverProps {
  productSlug: string
}

export function CardHover({ productSlug }: CardHoverProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/product/${productSlug}`, { unstable_viewTransition: true });
    window.scrollTo(0, 0);
  };

  return (
    <div className="card-hover">
      <button
        onClick={handleButtonClick}
        className="btn-details"
      >
        See Details
      </button>
      <div className="card-actions">
        <button className="card-action-button">
          <Share/>
          Share
        </button>
        <button className="card-action-button">
          <Compare/>
          Compare
        </button>
        <button className="card-action-button">
          <Like />
          Like
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
