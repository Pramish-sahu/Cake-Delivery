import React, { useState } from 'react';
import './order.css';

const Order = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !phone || !orderDetails) {
      alert('Please fill out all fields');
      return;
    }

    // Simulate submitting the order
    setTimeout(() => {
      setSuccessMessage('Your order has been placed successfully!');
      setName('');
      setAddress('');
      setPhone('');
      setOrderDetails('');
    }, 1000);
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Place Your Order</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="order-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your Delivery Address"
        ></textarea>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone Number"
        />

        <label htmlFor="orderDetails">Order Details:</label>
        <textarea
          id="orderDetails"
          value={orderDetails}
          onChange={(e) => setOrderDetails(e.target.value)}
          placeholder="What would you like to order?"
        ></textarea>

        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

export default Order;