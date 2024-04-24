import React from 'react'
import "./List.css"
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
// import { response } from 'express'
import { useEffect } from 'react'

const List = ({url}) => {
    const [list,setlist] = useState([])

    const fetchList = async() =>{
        const response = await axios.get(`${url}/api/food/list`)
        console.log(response.data);
        if(response.data.success){
            setlist(response.data.data)
        }
        else{
            toast.error("Not responding")
        }
    }

    const removeFood = async(foodId) =>{
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fetchList()

        if(response.data.success){
            toast.error(response.data.message)
        }
        else{
            toast.error("Error in deleting")
        }
    }

    useEffect(()=>{
        fetchList()
    },[])
  return (
    <div className='list flex-col'>
      <p>All food List</p>
      <div className="list_display">
        <div className="list_format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {list.map((item,index)=>{
            return(
                <div key={index} className="list_format">
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default List
