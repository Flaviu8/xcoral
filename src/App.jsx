import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/navbar/navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Prices from './pages/prices/Prices';
import Details from './pages/details/Details';



function App() {


  return (
    <>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pret" element={<Prices />}></Route>
          <Route path="/detalii" element={<Details />}></Route>
      </Routes>
      <Footer />

 </>
  )
}

export default App
