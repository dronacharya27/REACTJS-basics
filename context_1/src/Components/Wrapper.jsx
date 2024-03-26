import React from 'react'
import TodoForm from './TodoForm'
import { TodoContext, useTodoContext } from '../context/Context'
import { useContext } from 'react'

const Wrapper = () => {
  
    const {state} = useTodoContext()
    const {todos} = state
    
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <TodoForm/>
        <br />
       {todos.map(e=> <p> {e.name}    </p>)}
    </div>
  )
}

export default Wrapper
