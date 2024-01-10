import React, { useState } from 'react'
import Todoform from './Todoform'
import {v4 as uuid} from 'uuid'
import Todos from './Todos'
const TodoWrapper = () => {
    const style={backgroundColor:'grey'}
    const [todos,setTodos] = useState([])
    const addtodo = (todo) =>{
        setTodos([...todos,{id:uuid(),task: todo,completed:false,isEditing: false}])
        
    } 
    const togglecompleted = (id)=>{
        setTodos(todos.map(todo => todo.id ===id? {...todo,completed:!todo.completed}:todo))

    }
    const deletetodo= (id)=>{
        setTodos(todos.filter(todo => todo.id != id))
    }
  return (
    <div style={style}>
      <Todoform addtodo={addtodo}/>
      {todos.map((todo,index) => (
        <Todos task={todo} key={index} togglecompleted={togglecompleted} deletetodo={deletetodo}/>
    
      )
      )}
    </div>
  )
}

export default TodoWrapper
