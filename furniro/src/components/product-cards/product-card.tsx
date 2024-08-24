import React, { useEffect, useState } from 'react';

// Definindo a interface Product com as propriedades esperadas
interface Product {
  id: string; 
  name: string; 
  price: string; 
  description: string; 
  category: string; 
  size: string;
  sku: string;
  tag: string;  
}
 
const ProductsPage: React.FC = () => {
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
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* Renderizar outras propriedades do produto conforme necessário */}
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
