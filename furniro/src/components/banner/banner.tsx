import './banner.css' 
import arrow from "../../assets/icons/arrow.png";  

const Banner = () => { 
    return (
      <section className="banner"> 
      <h1>Home</h1>
        <div className="banner-content"> 
          <b><p>Home</p></b>
          <img src={arrow} className='arrow'/> 
          <p>Shop</p>
        </div>
      </section> 
    )
}

export default Banner 
