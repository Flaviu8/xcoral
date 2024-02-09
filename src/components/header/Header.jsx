import banner from "../../assets/header.mp4"
import Search from "../search/Search"
import './header.css'

export default function Header() {
  return (
    <div className="banner">
        <video src={banner} autoPlay playsInline muted loop width="100%" height="auto"></video>
        <div className="text-absolute">
        <h1>Vrei sa ai o masina fara avarii sau cu probleme la kilometri? Atunci alege site-ul nostru cu masini verificate.</h1>
      </div>
        <Search /> 
    </div>
  )
}
