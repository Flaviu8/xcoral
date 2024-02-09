import banner from "../../assets/header.mp4"
import './header.css'

export default function Header() {
  return (
    <div className="banner">
      <div className="text-absolute">
      <h1>Vrei să fii sigur că mașina ta nu a fost accidentată, are kilometri reali sau furată? Ai bulina verde care te ajută în această situație</h1>
      </div>
        <video src={banner} autoPlay playsInline muted loop width="100%" height="auto"></video>
    </div>
  )
}
