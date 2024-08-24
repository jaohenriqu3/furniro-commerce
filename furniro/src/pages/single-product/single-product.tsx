import React from 'react';
import './single-product.css'

interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sku: string;
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  imageUrl,
  description,
  sku,
  category,
  tags,
  sizes,
  colors,
}) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p className="product-price">Rs. {price.toFixed(2)}</p>
        <div className="product-rating">
          {/* Add rating stars here */}
        </div>
        <p className="product-description">{description}</p>
        <div className="product-options">
          <div className="product-size">
            <label htmlFor="size">Size:</label>
            <select id="size">
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="product-color">
            <label htmlFor="color">Color:</label>
            <div className="color-options">
              {colors.map((color) => (
                <div key={color} className="color-option">
                  <input type="radio" id={color} name="color" value={color} />
                  <label htmlFor={color}>
                    <span
                      style={{ backgroundColor: color }}
                      className="color-swatch"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="product-quantity">
          <button>-</button>
          <input type="number" value="1" min="1" />
          <button>+</button>
        </div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
      <div className="product-info">
        <p>SKU: {sku}</p>
        <p>Category: {category}</p>
        <p>Tags: {tags.join(', ')}</p>
        <div className="social-share">
          {/* Add social sharing buttons here */}
        </div>
      </div>
    </div>
  );
};

export default Product;