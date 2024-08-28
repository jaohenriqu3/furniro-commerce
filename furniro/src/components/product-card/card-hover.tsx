import Compare from '../../assets/icons/compare.png'
import Like from '../../assets/icons/like.png'
import Share from '../../assets/icons/share.png' 

import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './card-hover.css' 


interface CardHoverProps {
    productSlug: string
}

export function CardHover({ productSlug }: CardHoverProps) {
    const navigate = useNavigate();
  
  //  const handleButtonClick = () => {
  //    navigate(`/product/${productSlug}`, { unstable_viewTransition: true });
  //    window.scrollTo(0, 0);
  // };
  
    return (
      <div className="card-hover">
        
       <Link to='single-product'> <button className="btn-details"> Add to cart </button> </Link>
        
        <div className="card-actions"> 
          <img src={Share} alt="" className="card-action-button"/> 
          <h6>Share</h6>
          <img src={Compare} alt="" className="card-action-button"/>
          <h6>Compare</h6>
          <img src={Like} alt="" className="card-action-button"/>
          <h6>Like</h6>
        </div>
      </div>
    );
  }