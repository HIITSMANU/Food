import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(url + '/api/order/list');
      if (res.data.success) {
        // Reverse the order of the fetched orders
        setOrders(res.data.data.reverse());
        console.log(res.data.data);
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (e, orderId) => {
    const res = await axios.post(url + '/api/order/status', {
      orderId,
      status: e.target.value,
    });
    if (res.data.success) {
      await fetchOrders();
    }

    console.log(e, orderId);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (!orders) return null; // Return null when orders are not available

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='' />
            <div>
              <p className='order_items'>
                {order.items.map((item, index) => (
                  // Use comma (,) to separate items
                  // Use conditional operator (?:) to determine whether to add comma
                  index === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                ))}
              </p>
              <p className='order_name'>
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className='order_address'>
                <p>{order.address.street + ','}</p>
                <p>
                  {order.address.city +
                    ' , ' +
                    order.address.state +
                    ' , ' +
                    order.address.zipcode +
                    ' , '}
                </p>
              </div>
              <p className='order_phone'>{order.address.phone}</p>
            </div>
            <p className='order_quan'>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
            >
              <option value='Food Processing'>Food Processing</option>
              <option value='Out for delivery'>Out for delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
