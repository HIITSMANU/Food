import React from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {


    const [image,setimage] = useState(false)
    const [data,setdata] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setdata(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response = await axios.post(`${url}/api/food/add`,formData)

        if(response.data.success){
            setdata({
                name:"",
                description:"",
                price:"",
                image:"",
                category:"Salad"
            })
            setimage(false)
            toast.success(response.data.message)
        }
        else{
            console.log("Error");
        }

        
    }

    useEffect(()=>{
        console.log(data);
    },[data])
  return (
    <div className='add'>
        <form action="" className="flex-col" onSubmit={onSubmitHandler}>
            <div className="image_upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=> setimage(e.target.files[0]) } type="file"  id="image" hidden required />
            </div>
            <div className="add_product flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name}  type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add_product_description flex-col">
                <p>Product Description</p>
                <textarea  onChange={onChangeHandler} value={data.description} name="description" id="" cols="30" rows="6" placeholder='write content here'></textarea>
            </div>
            <div className="add_category_price">
                <div className="add_category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category" id="">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add_price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="" placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
