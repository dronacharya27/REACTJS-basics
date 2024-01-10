import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "../Reducer/Reducer";
const TodoContext = createContext()
const intialstate = {
    todos:[]
}
const TodoProvider =({children})=>{

const [state,dispatch] =useReducer(reducer,intialstate)
    return(
    <TodoContext.Provider value={{state,dispatch}}>
        {children}
    </TodoContext.Provider>
    )
}
const useTodoContext = ()=>{
    return useContext(TodoContext)
}

export {TodoProvider,TodoContext,useTodoContext}