import { createContext, useContext } from "react";

const ProductContext = createContext()

const ProductContextProvider = ({children})=>{
const name = "Dron12134"
return (
    <ProductContext.Provider value={{name}}>
        {children}
    </ProductContext.Provider>
)

}


const useProductContext = ()=>{
    return useContext(ProductContext)
}
export {ProductContext, ProductContextProvider,useProductContext}

