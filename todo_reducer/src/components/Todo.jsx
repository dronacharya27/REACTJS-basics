import React, { useState } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import './Wrapper.css'
import Check from '@mui/icons-material/Check';
import { useTodoContext } from '../context/Context';

const Todo = () => {
  const {state,dispatch} = useTodoContext()
  const {textarray} = state
  const[edittext,setEditText]=useState('')
  const[isvisible,setIsVisible] = useState(false)
  const [selected,setSelected] =  useState(true)
    
  const handledelete = (id) =>{
      console.log(id)
      dispatch({
        type:'remove_task',
        payload:id
      })

    }
    const handlecomplete= (id) =>{
      console.log(id)
      
      dispatch({
        type:'complete_task',
        payload:id
      })

    }
    const handleedit=(id)=>{
      dispatch({
        type:'edit_task',
        payload:id
      })
      
    }
    function handlefinaledit(id) {  
    
      dispatch({
        type:'final_edit',
        payload:{id,edittext}
      })
      
      
    }

    
    
  return (
    <div className='todo'>
      
        {textarray.map(e =>(
          
          <div key ={e.id} className={e.completed ?'complete':'notcomplete'} >{e.name}  <Checkbox  color="secondary" onClick={() => handlecomplete(e.id)} />
          <Button color="secondary" variant="contained" onClick={() => handledelete(e.id)}> <DeleteIcon/></Button>
          <Button color="secondary" variant="contained" onClick={() => handleedit(e.id)}> <Edit/></Button>
          <br />{e.isediting && <span><TextField  color="secondary"  label="What To Do?" variant='filled' onChange={ev=> setEditText(ev.target.value)} /><Button color="secondary" variant="contained" onClick={() => handlefinaledit(e.id)}> <Check/></Button></span>} 
          </div>
          
          ))}
         
        

    </div>
  )
}

export default Todo
