import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {

  return (
    <>
    <nav style={{display:'grid'}}>
      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/about'}>About</Link> </li>
        <li> <Link to={'/contact'}>Contact</Link> </li>
        <li> <Link to={'/signup'}>Signup</Link> </li>
        <li> <Link to={'/login'}>Login</Link> </li>
        
      </ul>
    </nav>
     <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        
     </Routes>
    </>
  )
}

export default App
