import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './cartPage.css' 
import NavBar from '../../components/nav/navbar'; 
import BannerCart from '../../components/banner/bannerCart'; 
import BussinesSpecs  from '../../components/bussinesSpecs/bussinesSpecs'; 
import Footer from '../../components/footer/footer'; 

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return ( 
<>
    <NavBar> 
    </NavBar> 
    <BannerCart>
    </BannerCart>
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-header">
          <div className="cart-header-item">Product</div>
          <div className="cart-header-item">Price</div>
          <div className="cart-header-item">Quantity</div>
          <div className="cart-header-item">Subtotal</div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <div className="cart-item-info-title">{item.name}</div>
              <div className="cart-item-info-price">Rs. {item.price.toFixed(2)}</div>
              <div className="cart-item-info-quantity">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-info-subtotal">Rs. {(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div className="cart-total-title">
        <h1>Cart Totals</h1>
        </div>
        <div className='cart-price'> 
        <div className="cart-total-price-subtotal"> 
        <label htmlFor="">Subtotal</label> 
        <p > Rs. {calculateTotal().toFixed(2)} </p>
        </div>
        <div className="cart-total-price-total">
        <label htmlFor="">Total</label> 
        <p> Rs. {calculateTotal().toFixed(2)} </p>
        </div>
        </div>
        <div className="cart-total-button"> 
        <Link to='/checkout'><button className="cart-total-button">Check Out</button></Link>
        </div>
      </div>
    </div>
    <BussinesSpecs>
    </BussinesSpecs> 
    <Footer>
    </Footer>
</>
  );
};

export default CartPage;