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

    const totalCartAmount = () =>{
        let total = 0;
        for (const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                total += itemInfo.price * cartItem[item]
            }
        }
        return total;
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart,
        totalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}



// import React, { createContext, useContext, useState } from 'react';

// export const StoreContext = createContext();

// export const useCart = () => useContext(StoreContext);

// export const StoreContextProvider = ({ children }) => {
//     const [cartItem, setCartItem] = useState({});

//     const addtoCart = (itemId) => {
//         setCartItem((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1
//         }));
//     };

//     const removefromCart = (itemId) => {
//         setCartItem((prev) => {
//             const newCart = { ...prev };
//             if (newCart[itemId] > 1) {
//                 newCart[itemId] -= 1;
//             } else {
//                 delete newCart[itemId];
//             }
//             return newCart;
//         });
//     };

//     const totalCartAmount = () => {
//         // Implementation remains the same
//     };

//     const contextValue = {
//         cartItem,
//         addtoCart,
//         removefromCart,
//         totalCartAmount
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {children}
//         </StoreContext.Provider>
//     );
// };