import { createContext, useContext } from "react";
import { useReducer } from "react";
import Reducer from "../reducer/Reducer";

const TodoContext = createContext()



const Todoprovider =({children})=>{
const initialstate = {
    textarray:[]
}


const [state,dispatch] = useReducer(Reducer,initialstate)
return (
    <TodoContext.Provider value={{state, dispatch}}>
            {children}
    </TodoContext.Provider>
)
}
const useTodoContext =()=>{
    return useContext(TodoContext)
}

export {Todoprovider,TodoContext,useTodoContext}