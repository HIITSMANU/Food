import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios"
// import { url } from "../../../admin/src/assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cartItem , setCartItem] = useState({});
    const [food_list,setFoodlist] = useState([]);
    const [logindata,setlogindata] = useState([])
    const url = "http://localhost:4000";
    const [token,settoken] = useState("")

    const fetchLoginData = async() => {
        const res = await axios.get(url+"/api/user/login")
        console.log(res.data);
        setlogindata(res.data)
    } 


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

    // useEffect(()=>{
    //     if(localStorage.getItem("token")){
    //         settoken(localStorage.getItem("token"))
    //     }
    // },[])

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            await fetchLoginData()
            if(localStorage.getItem("token")){
                settoken(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart,
        totalCartAmount,
        url,
        token,
        settoken,
        logindata
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
