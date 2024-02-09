import banner from "../../assets/header.mp4"
import './header.css'

export default function Header() {
  return (
    <div className="banner">
      <div className="text-absolute">
        <h1> Vrei sa fii sigur ca masina pe care o cumperi nu a fost furata sau avariata? Atunci alege site-ul nostru si cumpara doar masini verificate.</h1>
      </div>
        <video src={banner} autoPlay playsInline muted loop width="100%" height="auto"></video>
    </div>
  )
}
