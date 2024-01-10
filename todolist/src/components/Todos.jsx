import React from 'react'
import './Todos.css'
function Todos({task,togglecompleted,deletetodo}) {
    
  return (
    <div>
      <p className={`${task.completed ? 'completed':'notcompleted'}`} onClick={()=>{togglecompleted(task.id)}}> {task.task} </p> 
      <button>edit</button><button onClick={()=>{deletetodo(task.id)}}>delete</button>
    </div>
  )
}

export default Todos
