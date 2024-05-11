import React from 'react'
import "./Orders.css"
import { useState } from 'react'
import {toast} from "react-toastify"
import { useEffect } from 'react'
import axios from "axios"
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders,setorders] = useState([])

  const fetchorder = async () =>{
    const res = await axios.get(url+"/api/order/list")
    if(res.data.success){
      setorders(res.data.data)
      console.log(res.data.data);
    }
    else{
      toast.error(error)
    }
  }
  

  useEffect(()=>{
    fetchorder()
  },[])
  
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,i)=>{
          <div key={i} className="order-item">
            <img src={assets.parcel_icon} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default Orders
