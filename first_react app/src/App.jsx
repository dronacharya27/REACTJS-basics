import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [name,setName] = useState("Sanket")
  const [num,setNum] = useState(0)
  const changeName = ()=>{
    setName("Dron")
  }

  return (
    <>
   <Navbar home={"Home"} name={name}/>
     <div>
      Hello My React App

      <button onClick={()=>changeName()}>Change Name</button>
     </div>
    </>
  )
}

export default App
