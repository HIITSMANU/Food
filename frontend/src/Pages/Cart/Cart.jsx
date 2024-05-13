import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
  const { cartItem, removefromCart, totalCartAmount, url, food_list, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const discountCoupon = "qwerty123";
  const discountAmount = 5; 

  const isEmpty = Object.values(cartItem).every(quantity => quantity === 0);

  const applyDiscount = () => {
    if (totalCartAmount() > 30 && promoCode === discountCoupon) {
      return discountAmount;
    }
    return 0;
  };

  if (isEmpty) {
    return (
      <div className="main666">
        <div>
          <div className="u666">
            <div>
              <div className="v666">
                <div className="w666">
                  <div className="gif">
                    <img src="https://assets.cltstatic.com/images/responsive/empty-trail-cart.gif" alt="Empty cart" />
                  </div>
                </div>
                <div>
                  <div className="x666">There is nothing here!</div>
                  <div className="y666">Let's do some retail therapy.</div>
                </div>
              </div>
              <div className="shopbutton">
                <a href="/" className="home1234">
                  <button className="but5666" content="START EATING">
                    START EATING
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='cart_items'>
      {token && food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <div className="cart_display" key={item._id}>
              <div className="left_image_display">
                <img src={url + "/images/" + item.image} alt={item.name} />
              </div>
              <div className="right_contents">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>Quantity: {cartItem[item._id]}</p>
                <p className='green_amount'>Total Price: ${item.price * cartItem[item._id]}</p>
                <button onClick={() => removefromCart(item._id)}>Remove from the Cart</button>
              </div>
            </div>
          );
        }
        return null; // If item is not in cart, return null
      })}
      {token ? <div className="cart_totals">
        <div className="cart_total_sub">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>SubTotal</p>
              <p>{totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Discount</p>
              <p>- {applyDiscount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>{totalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Total</p>
              <p>{Math.max(0, totalCartAmount() - applyDiscount() + 20)}</p>
            </div>
          </div>  
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem_promocode">
          <p>Coupon</p>
          <p>If you have a promo code, enter it here:</p>
          <div className="cartitem_promobox">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button>Apply</button>
          </div>
        </div>
      </div> : <></>}
    </div>
  );
}

export default Cart;
