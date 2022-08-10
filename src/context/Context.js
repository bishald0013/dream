import React, { createContext, useContext, useReducer } from "react"
import product from "../ProductsLists/Product"
import dreamCature from "../ProductsLists/DreamCature"
import { cartReducer } from "./Reducer"
import { productReducer } from "./Reducer"
import ringList from "../ProductsLists/RingsList"

const Cart = createContext()

const  Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
        product: product,
        dreamCature: dreamCature,
        ringList: ringList,
        cart: []
    } )

    const [productState, productDispatch] = useReducer( productReducer, {

    })
 
    return (
        <Cart.Provider value={{state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context 

export const CartState = () => {
    return useContext(Cart)
}
