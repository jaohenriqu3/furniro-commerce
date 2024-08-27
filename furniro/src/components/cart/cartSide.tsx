import Remove from '../../assets/icons/remove.png'
import Close from '../../assets/icons/close.png' 
import './cartSide.css'

interface CartSidebarProps {
  onClose: () => void;
}

export function CartSidebar({ onClose }: CartSidebarProps) {
  return (
    <div className="shopping-cart-sidebar">
      <div className="sidebar-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>
          <Close />
        </button>
      </div>
      <div className="cart-item">
        <img src="product-image.png" alt="Product" className="product-image" />
        <div className="product-details">
          <p className="product-name">Product Name</p>
          <p className="product-price">$100.00</p>
        </div>
        <button className="remove-btn">
          <Remove />
        </button>
      </div>
      <div className="subtotal">
        <p>Subtotal</p>
        <p>$100.00</p>
      </div>
      <div className="action-buttons">
        <button className="action-btn">Button 1</button>
        <button className="action-btn">Button 2</button>
        <button className="action-btn">Button 3</button>
      </div>
    </div>
  );
}
