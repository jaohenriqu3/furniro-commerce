import React from 'react';
import { Link } from 'react-router-dom';
import './cartSide.css';
import remove from "../../assets/icons/remove-item.png";   
import close from "../../assets/icons/remove-item.png";   
import slytherine from "../../assets/images/slytherine.png"
import { useCart }  from './cartContext'; 

interface CartSidebarProps {
  onClose: () => void;
}

export function CartSidebar({ onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <div className="shopping-cart-sidebar">
      <div className="sidebar-header">
        <h2>Shopping Cart</h2> 
        <img src={close} alt="Close Mini Cart" onClick={onClose} className='close-cart' />
      </div>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={slytherine} alt="Product" className="product-image" />
          <div className="product-details">
            <p className="product-name">{item.name}</p>
            <p className="product-price">{item.price}</p>
          </div>
        <img src={remove} alt="Remove Item" onClick={() => removeFromCart(item.id)} />
      </div>
      ))}
      <h3 className='divider'>____________________________________________________</h3>
      <div className="action-buttons">
        <Link to='/cart-page'><button className="action-btn">Cart</button></Link>
        <Link to='/checkout'><button className="action-btn">Checkout</button></Link>
        <button className="action-btn">Comparison</button>
      </div>
    </div>
  );
}
