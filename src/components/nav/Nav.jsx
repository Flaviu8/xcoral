import './Nav.css'
import home from '../../assets/home.svg'
import about from '../../assets/aboutus.svg'
import info from '../../assets/info.svg'
import add from '../../assets/add.png'
import prices from '../../assets/prices.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <div className="navbar">
        <Link to="/" className="active"><img src={home} alt="" /><p>Acasa</p></Link>
        <Link to="/" ><img src={about} alt="" /><p>Despre noi</p></Link> 
        <Link to="/" ><img className='add' src={add} alt="" /></Link>  
        <Link to="/"><img src={info} alt="" /><p>Contact</p></Link>
        <Link to="/"><img src={prices} alt="" /><p>Preturi</p></Link>
    </div>
    </div>
  )
}
