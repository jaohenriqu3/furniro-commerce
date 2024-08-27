import './banner.css' 
import arrow from "../../assets/icons/arrow.png";  

const BannerCheckout = () => { 
    return (
      <section className="banner"> 
      <h1>Checkout</h1>
        <div className="banner-content"> 
         <b><p>Home</p></b> 
          <img src={arrow} className='arrow'/> 
          <p>Checkout</p>
        </div>
      </section> 
    )
}

export default BannerCheckout