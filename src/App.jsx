import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/navbar/navbar'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Prices from './pages/prices/Prices';



function App() {


  return (
    <>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pret" element={<Prices />}></Route>
      </Routes>
      <Footer />

 </>
  )
}

export default App
