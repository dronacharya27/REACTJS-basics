import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";

const CartContext = createContext()
const initialstate = {
    cart:[
        
    ],
    total:0,
    total_price:0
}
const CartProvider =({children}) =>{
const[state,dispatch] = useReducer(reducer,initialstate)

const add_to_cart = (id,product)=>{
    
    dispatch({
        type:'add_to_cart',
        payload:{id,product}
    })
    localStorage.setItem('cart',JSON.stringify(state.cart))
}
const remove_from_cart = (id,product)=>{
    dispatch({
        type:'remove_from_cart',
        payload:{id,product}
    })
}

return (
    <CartContext.Provider value={{state,add_to_cart,remove_from_cart}} >
        {children}
    </CartContext.Provider>
)
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartContext,CartProvider,useCartContext}