import trophy from "../../assets/icons/trophy.png";  
import guarantee from "../../assets/icons/guarantee.png";  
import shipping from "../../assets/icons/shipping.png";  
import customerSupport from "../../assets/icons/customer-support.png";  

const BussinesSpecs = () => {
    return ( 
    <section className="business-specs">
        <div className="spec">
          <img src={trophy} alt="Spec Icon" />
          <div className="spec-content">
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="spec">
          <img src={guarantee} alt="Spec Icon" />
          <div className="spec-content">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="spec">
          <img src={shipping} alt="Spec Icon" />
          <div className="spec-content">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="spec">
          <img src={customerSupport} alt="Spec Icon" />
          <div className="spec-content">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    )
}

export default BussinesSpecs