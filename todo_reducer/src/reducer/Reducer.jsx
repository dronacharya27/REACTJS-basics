import {v4 as uuid} from 'uuid'

function Reducer(state,action){
  
    switch (action.type) {
      case 'add_task':
       
        return {
          ...state,
          textarray:[...state.textarray,{
            id:uuid(),
            name:action.payload,
            completed:false,
            isediting:false,
          }]
    }
        break;
        
        case 'remove_task':
          console.log(state)
          return {testarray:state.textarray.filter(e =>  e.id !== action.payload)}
  
        case 'complete_task':
      

         
          return state.textarray.map(e => {
            if(e.id ===action.payload){
              return {...e,completed:!e.completed }
            } else
              return e
          })
          
  
        case 'edit_task':
          console.log(state)

          const textarray = state.textarray
          return textarray.map(e => {
            if(e.id ===action.payload){
              return {...e,isediting:!e.isediting}
            } else{
              return e
            }
        
        
            
    })
  
        case 'final_edit':
          console.log(state)

          return state.map(e =>{
            if(e.id ===action.payload.id){
              return {...e,name:action.payload.edittext,isediting:false}
            }
            else{
              return e
            }
          })
      default:
        return state
        break;
    }
  }
export default Reducer