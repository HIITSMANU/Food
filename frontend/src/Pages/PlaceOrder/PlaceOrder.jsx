import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { totalCartAmount } = useContext(StoreContext);

  return (
    <div className='row mt-5'>
      <div className="col-md-8">
        <h2>Delivery Information</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
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
            <button onClick={()=> navigate('/pay')}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
