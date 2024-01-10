import React, { useReducer } from 'react'
import Input from './input'
import './Wrapper.css'
import Todo from './Todo'
import Reducer from '../reducer/Reducer'
const Wrapper = () => {
 
  return (
  
  <div className='Wrapper'>
     
        <Input/>
       
        <Todo/>
     
</div>
  )
}

export default Wrapper
