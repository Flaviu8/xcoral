import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/navbar/navbar'
import Home from './pages/home/Home'

function App() {


  return (
    <>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>
 </>
  )
}

export default App
