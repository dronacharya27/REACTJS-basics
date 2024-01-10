import React, { useState } from 'react'

function Todoform({addtodo}) {
    const [todoForm,SettodoForm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addtodo(todoForm)
        SettodoForm('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text"  value={todoForm} onChange={(e) => {SettodoForm( e.target.value)} }/><button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default Todoform
