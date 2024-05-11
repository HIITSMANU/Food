import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './PlaceOrder.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { totalCartAmount,token,food_list, cartItem, url } = useContext(StoreContext);

  const [data,setdata] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(data=> ({...data,[name]:value}))
  }

  const placeOrder = async(e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if(cartItem[item._id]>0){
        let item_info = item;
        item_info["quantity"] = cartItem[item._id];
        orderItems.push(item_info)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:totalCartAmount()+20,
    }
    let res = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(res.data.success){
      const  {session_url} = res.data;
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(totalCartAmount() === 0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} >
    <div className='row mt-5'>
      <div className="col-md-8">
        <h2>Delivery Information</h2>
       
          <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">FirstName</label>
              <input type="text" name='firstName'  id="inputEmail4" className="form-control" onChange={onChangeHandler} value={data.firstName} placeholder="Enter FirstName" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">LastName</label>
              <input type="text" name='lastName'  onChange={onChangeHandler} value={data.lastName} className="form-control" id="inputEmail4" placeholder="Enter LastName" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" name='email' onChange={onChangeHandler} value={data.email} className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputStreet4">Street</label>
              <input type="text" name='street' onChange={onChangeHandler} value={data.street} className="form-control" id="inputStreet4" placeholder="Enter Your Street" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input onChange={onChangeHandler} name='city' value={data.city} type="text" className="form-control" id="inputCity" placeholder="Enter Your City" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <input onChange={onChangeHandler} name='state' value={data.state} type="text" className="form-control" id="inputState" placeholder="Enter Your State" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputcountry">Country</label>
              <input onChange={onChangeHandler} name='country' value={data.country} type="text" className="form-control" id="inputcountry" placeholder="Enter Your Country" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input onChange={onChangeHandler} name='zipcode' value={data.zip} type="text" className="form-control" id="inputZip" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="phone">Phone</label>
              <input onChange={onChangeHandler} name='phone' value={data.phone} type="number" className="form-control" id="phone" placeholder="Enter Your Number" />
            </div>
          </div>
      </div>
      <div className="col-md-4">
        <div className="cart_totals">
          <div className="cart_total_sub">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart_total_details">
                <p>SubTotal</p>
                <p>{totalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>{totalCartAmount()==0?0:20}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Total</p>
              <p>{totalCartAmount()===0?0:totalCartAmount()+20  }</p>
            </div>
            </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default PlaceOrder;
