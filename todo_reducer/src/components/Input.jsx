import React, { useReducer, useState } from 'react'
import TextField from '@mui/material/TextField'
import AddTaskIcon from '@mui/icons-material/AddTask';
import './Wrapper.css'
import { Button } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment';
import { useTodoContext } from '../context/Context';


const Input = () => {
  const {dispatch} = useTodoContext()
const [text,setText] = useState('')
const handleClick = ()=>{
  
  dispatch({type:'add_task',payload:text})
  setText('')
}
function handleonchange(e){
    setText(e.target.value)
}
 
  return (
   <div className='input'>
      <TextField  color="primary"  label="What To Do?"  value={text} onChange={handleonchange} className='inputbox' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AddTaskIcon/>
            </InputAdornment>
          ),
        }}
        variant="filled"/>
      <Button color="secondary" variant="contained" onClick={handleClick}> <AddTaskIcon/></Button>
      
    </div>
  )
}

export default Input    
