import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/navbar/navbar'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';



function App() {


  return (
    <>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />

 </>
  )
}

export default App
