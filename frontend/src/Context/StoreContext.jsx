import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cartItem , setCartItem] = useState({});

    const addtoCart = (itemId) =>{
        if(!cartItem[itemId]) {
            setCartItem((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removefromCart = (itemId) => {
        setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
