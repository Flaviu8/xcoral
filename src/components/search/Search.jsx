import './Search.css'
import search from "../../assets/search.svg"
import searchwh from "../../assets/searchwhite.svg"

export default function Search() {
  return (
    <div className="search-container">
      <div className='search-main'>
      <div className='search'>
        <div>
        <img src={search} alt="cautare" />
        </div>
        <div>
          <input type="text" placeholder="Cautare..."></input>
        </div>
      </div>
      <div className='model-input'>
          <h4>Marca:</h4>
          <div className="dropdown">
            <button className="dropdown-btn">
              <span>Toate</span>
              <span className="arrow"></span>
            </button>
            <ul className="dropdown-content">
              <li><a href="#">Bmw</a></li>
              <li><a href="#">Audi</a></li>
              <li><a href="#">Golf</a></li>
              <li><a href="#">Mercedes</a></li>
            </ul>
        </div>
        <div className='search-btn' >
                <button >
                <img src={searchwh} alt="cauta" /><span>Cauta anunturi</span>
              </button>
            </div>
      </div>
    
      </div>
    </div>
  )
}
