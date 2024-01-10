import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from "./Components/Cart"
function App() {


  return (

    <>
<Router>
<Navbar/>
  <Routes>
    <Route path="/" element={<Products/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>


  </Router>
    </>
  )
}

export default App
