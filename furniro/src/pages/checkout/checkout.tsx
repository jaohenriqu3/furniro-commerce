import React, { useState } from 'react'; 
import './checkout.css'

import NavBar from '../../components/nav/navbar';
import BannerCheckout from '../../components/banner/bannerCheckout';
import BussinesSpecs from '../../components/bussinesSpecs/bussinesSpecs';
import Footer from '../../components/footer/footer';

interface BillingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface OrderItem {
  name: string;
  price: number;
}

interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  total: number;
}

interface PaymentMethod {
  value: string;
  label: string;
}

interface CheckoutState {
  billingDetails: BillingDetails;
  orderSummary: OrderSummary;
  paymentMethod: PaymentMethod;
}

const Checkout: React.FC = () => {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    billingDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '', 
    },
    orderSummary: {
      items: [
        {
          name: 'Slytherine',
          price: 250000,
        },
      ],
      subtotal: 250000,
      total: 250000,
    },
    paymentMethod: {
      value: 'direct-bank-transfer',
      label: 'Direct Bank Transfer',
    },
  });

  const handleBillingDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCheckoutState((prevState) => ({
      ...prevState,
      billingDetails: { ...prevState.billingDetails, [name]: value },
    }));
  };

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const paymentMethod: PaymentMethod = {
      value,
      label: value === 'direct-bank-transfer'
        ? 'Direct Bank Transfer'
        : 'Cash on Delivery',
    };
    setCheckoutState((prevState) => ({
      ...prevState,
      paymentMethod,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Checkout form submitted:', checkoutState);
  };

  return ( 
    <>
    <NavBar>
    </NavBar>
    <BannerCheckout>
    </BannerCheckout>
   <div className="container">
      <div className="checkout-container">
        <div className="billing-details">
          <h2 className='billing-title'>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name:</label>
              <input 
                className='checkout-input'
                type="text"
                id="first-name"
                name="firstName"
                value={checkoutState.billingDetails.firstName}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name:</label>
              <input
                className='checkout-input'
                type="text"
                id="last-name"
                name="lastName"
                value={checkoutState.billingDetails.lastName}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className='checkout-input'
                type="email"
                id="email"
                name="email"
                value={checkoutState.billingDetails.email}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                className='checkout-input'
                type="tel"
                id="phone"
                name="phone"
                value={checkoutState.billingDetails.phone}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                className='checkout-input'
                type="text"
                id="address"
                name="address"
                value={checkoutState.billingDetails.address}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                className='checkout-input'
                type="text"
                id="city"
                name="city"
                value={checkoutState.billingDetails.city}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                className='checkout-input'
                type="text"
                id="state"
                name="state"
                value={checkoutState.billingDetails.state}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip Code:</label>
              <input
                className='checkout-input'
                type="text"
                id="zip"
                name="zipCode"
                value={checkoutState.billingDetails.zipCode}
                onChange={handleBillingDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                className='checkout-input'
                type='text'
                id="country"
                name="country"
                value={checkoutState.billingDetails.country}
                onChange={handleBillingDetailsChange}
                required
            />
            </div>
            <div className="form-group"> 
            
              <input
                className='checkout-input'
                type="text"
                id="zip"
                name="additional-information"
                value={checkoutState.billingDetails.zipCode}
                onChange={handleBillingDetailsChange}
                required
                placeholder='Additional Information'
              />
            </div>
          </form>
        </div>
        <div className="order-summary">
          <div className='title-summary'> 
          <h2>Product</h2>
          <h2>Subtotal</h2>
          </div>
          {checkoutState.orderSummary.items.map((item) => (
            <div key={item.name} className="order-item">
              <p className='order-product'>{item.name}</p>
              <p className="price">Rs. {item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="order-total">
            <p className='order-title'>Subtotal</p>
            <p className="price">
              Rs. {checkoutState.orderSummary.subtotal.toFixed(2)}
            </p>
          </div>
          <div className="order-total">
            <p className='order-title'>Total</p>
            <p className="price-total">
              Rs. {checkoutState.orderSummary.total.toFixed(2)}
            </p>
          </div> 

          <h3 className='divider'>____________________________________________________</h3>

          <div className="payment-info">
            <div className="form-group">
                <div className='input-group'> 
                <input
                className='input-payment'
                type="radio"
                id="direct-bank-transfer"
                name="payment-method"
                value="direct-bank-transfer"
                checked={
                  checkoutState.paymentMethod.value ===
                  'direct-bank-transfer'
                }
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="direct-bank-transfer">
                Direct Bank Transfer
              </label>
                </div>
              <p className='bank-description'>
              Make your payment directly into our bank account. Please use
              your Order ID as the payment reference. Your order will not
              be shipped until the funds have cleared in our account.
            </p>
            </div>

            <div className="form-group"> 
            <div className='input-group'>
            <input
                type="radio"
                id="cash-on-delivery"
                name="payment-method"
                value="cash-on-delivery"
                checked={
                  checkoutState.paymentMethod.value === 'cash-on-delivery'
                }
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="cash-on-delivery">Cash On Delivery</label>
            </div>
            </div>
          </div>
          <p className="privacy-policy">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and
            for other purposes described in our <b>privacy policy.</b>
          </p>
          <div className='place-order-btn'>
          <button type="submit" className="place-order">
            Place Order
          </button>
          </div>
          
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

export default Checkout;
