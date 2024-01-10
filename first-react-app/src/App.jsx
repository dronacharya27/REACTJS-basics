
import './App.css'
import Greetings from "./Greetings.jsx"
import Die from './Die.jsx'
import Game from './Game'
import Heading from './Heading'
import ColorList from './ColorList'
import Slot from './Slot'
import ShoppingList from './ShoppingList'
function App() {
  const data = [
    {id:1,name:'eggs', quantity:12, purchased:true},
   { id:2,name:'milk', quantity:1, purchased:false},
    {id:3,name:'vegetable', quantity:10, purchased:true},
    {id:4,name:'water', quantity:15, purchased:false},
  ]

  return (
    <>
     {/* <Greetings person='Dron'/>
     <Greetings person='Kirti'/>
     <Greetings person='Chandresh'/>
     <Die numSides={20}/>
     <Die numSides={6}/> */}
     {/* <Heading color='pink' Text='Welcome!!'/>
     <Game/>
     <ColorList color={['red','pink','teal','green']}/> */}
     {/* <Slot val1='🍒' val2='🍒' val3='🍒' /> */}
     <ShoppingList list={data}/>
     
    </>
  )
}

export default App
  