import './searchSection.css' 
import filter from "../../assets/icons/filter.png"; 
import four from "../../assets/icons/four.png"; 
import horizoltal from "../../assets/icons/horizontal.png";   

const Pagination = () => {
    return (
        <section className="search-section">
        <div className="search-left">
          <img src={filter} alt="Filter Icon" className='filter-icon' />
          <span>Filter</span>
          <img src={four} alt="Four Icon" className='exibition-icon' /> 
          <img src={horizoltal} alt="Horizontal Icon" className='exibition-icon' /> 
          <span className='filter-results'>| Showing 1–16 of 32 results</span>
        </div>
        <div className="search-right">
          <span>Show</span>
          <input type="number" value={16} min={1} /> 
          <span>Short By</span>
          <input type="text" placeholder='Default'/>
        </div> 
      </section>
    )
}

export default Pagination