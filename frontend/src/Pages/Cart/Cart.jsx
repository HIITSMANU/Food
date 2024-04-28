import React , {useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const {cartItem,  removefromCart , totalCartAmount,url,food_list} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart_items'>
      {food_list.map((item,index)=>{
        console.log(url+"/images"+item.image);
        if(cartItem[item._id]>0){
          return (
            <div className="cart_display">
              <div className="left_image_display">
                <img src={url+"/images/"+item.image} alt="" />
              </div>
              <div className="right_contents">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>Quantity : {cartItem[item._id]}</p>
                <p>Total Price : ${item.price * cartItem[item._id]}</p>
                <button onClick={()=> removefromCart(item._id)}>Remove from the Cart</button>
              </div>
            </div>
          )
        }
      })}
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
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="coupon">
          <div>
            <p>If you have a coupon apply here</p>
            <div className="coupon_input">
              <input type="text" placeholder='Enter Coupon here' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
