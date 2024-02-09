import {useState} from 'react';
import { NavLink, Link} from "react-router-dom";
import './navbar.css'
import hamburgerIcon from "../../assets/menu-icon.svg"
import xIcon from "../../assets/x-symbol.svg"



function NavigationBar () {
  const [showMenu, setShowMenu] = useState(false);






  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className='nav_main'>
      <img className='hamburger' src={hamburgerIcon} alt='menu' onClick={toggleMenu}/>
        <Link className='logo' href="/"><h2>XCoral</h2></Link>
        <ul className={`navigation ${showMenu ? 'showMenu' : ''}`}>
        <div className='close_btn'>
            <img src={xIcon} alt='x-symbol' onClick={toggleMenu}/>
        </div>
            <li><NavLink to="/">Acasă</NavLink></li>
            <li><NavLink to="/despre">Despre</NavLink></li>
            <li><NavLink to="/contactează-ne">Contactează-ne</NavLink></li>
            <li><NavLink to={`/demo`}>Prețuri</NavLink></li>
          </ul>
      <div className='publish'>
        <button>Postează o mașină</button>
      </div>
    
    </div>
  );
}

export default NavigationBar;