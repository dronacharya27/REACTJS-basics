import React from 'react'
import { useState } from 'react'
import { useTodoContext } from '../context/Context'

const TodoForm = () => {
const {dispatch}=useTodoContext()
const[text,setText]=useState('')
  const handlesubmit = ()=>{
    dispatch({
        type:'add',
        payload:text
    })
  }
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} /> <button type='submit' onClick={handlesubmit}>add</button>
    </div>
  )
}

export default TodoForm
