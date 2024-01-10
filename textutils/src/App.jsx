import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const cgmode=()=>{
    if(mode=='dark'){    
      setMode('light')
      setMainst({
        backgroundColor:'white',
        color:'black'
      })
  }
  else{
    setMode('dark')
    setMainst({
      backgroundColor:'gray',
      color:'white'
    })
  }
  }

  const [mainst,setMainst] = useState({
    backgroundColor:'white',
    color:'black'
  })

  return (
    <>
   <BrowserRouter>
  <div className="main" style={mainst}>
   <Navbar title="TextUtils"  about="About Us" mode={mode} cgmode={cgmode}/>
   <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter Your Text Here" mode={mode}/>

              }
            ></Route>
            
          </Routes>
   
   
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
