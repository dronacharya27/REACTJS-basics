import React from 'react'

const reducer = (state,action) => {

    switch (action.type) {
        case 'add_to_cart':
            const is_exist = state.cart.find(e => e.id == action.payload.id)
            
            if (is_exist){
                const updated_cart = state.cart.map(e => {
                    if (e.id == action.payload.id) {
                        return {
                            ...e,quntity: e.quntity+1,total:e.total + e.price
                        }    
                    }
                    else return e
                })
               
                return{
                    ...state,
                    cart: updated_cart,
                    total:state.total + 1
                }
            }
            else{
            const product = action.payload.product
           
           return {
                ...state,
                cart:[
                    ...state.cart,
                    product
                ],
                total:state.total + 1
  
            }
        }
        case 'remove_from_cart':
            const is_exist2 = state.cart.find(e=> e.id == action.payload.id)
            if (is_exist2 && state.total>0) {
                const updated_cart = state.cart.map(e=>{
                    if(e.id == action.payload.id) {
                        
                            return {...e,quntity:e.quntity-1,total:e.total - e.price}
                        
                        
                    }
                   else return e
                  
                }).filter(e=>e.quntity !=0)
                 return {
                    ...state,
                    cart:updated_cart,
                    total:state.total-1
                 }  
                
            }
           
            return state
        
            default:
            break;
    }
  
}

export default reducer
