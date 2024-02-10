import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/navbar/navbar'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav';



function App() {


  return (
    <>
    <Navigation />
    <Nav />
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
 </>
  )
}

export default App
