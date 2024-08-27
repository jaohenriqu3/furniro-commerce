import './banner.css' 
import arrow from "../../assets/icons/arrow.png";  

const BannerCart= () => { 
    return (
      <section className="banner"> 
      <h1>Cart</h1>
        <div className="banner-content"> 
          <b><p>Home</p></b>
          <img src={arrow} className='arrow'/> 
          <p>Cart</p>
        </div>
      </section> 
    )
}

export default BannerCart 