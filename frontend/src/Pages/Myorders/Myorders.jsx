import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './Myorders.css';

const Myorders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const res = await axios.post(url + '/api/order/orders', {}, { headers: { token } });
      setData(res.data.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      console.log(`Attempting to delete order with ID: ${orderId}`);
      const res = await axios.delete(`${url}/api/order/${orderId}`, { headers: { token } });
      console.log('Delete response:', res);
      if (res.data.success) {
        setData((prevData) => prevData.filter((order) => order._id !== orderId));
      } else {
        console.error(`Failed to delete order with ID: ${orderId}. Message: ${res.data.message}`);
      }
    } catch (error) {
      console.error('Failed to delete the order:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  if (!data) return null;

  return (
    <div className='myorders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order) => (
          <div key={order._id} className="myorder">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <p>
              {order.items.map((item, i) => (
                <span key={i}>
                  {item.name} x {item.quantity}{i !== order.items.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span>&#x25cf;</span><b>{order.status}</b></p>
            <button onClick={fetchOrders}>Track Order</button>
            <button className="delete-button" onClick={() => deleteOrder(order._id)}>Delete Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorders;
