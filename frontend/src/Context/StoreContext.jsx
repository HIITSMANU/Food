import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios"
// import { url } from "../../../admin/src/assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cartItem , setCartItem] = useState({});
    const [food_list,setFoodlist] = useState([]);
    const url = "http://localhost:4000";


    const  fetchFoodList = async() =>{
        const response = await axios.get(url+"/api/food/list")
        setFoodlist(response.data.data)
    }

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
        async function loadData(){
            await fetchFoodList()
        }
        loadData()
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart,
        totalCartAmount,
        url
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
