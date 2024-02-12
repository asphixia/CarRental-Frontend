import React from 'react';
import '../styling/confirmationStyling.css';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
 return (
    <div className="confirmation-container">
      <h1>Order Confirmed</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="green" />
  <path d="M20 50l20 20 40-40" fill="none" stroke="white" stroke-width="10"/>
</svg>
      <p>Your order has been successfully confirmed. Please check your email for more details.</p>
      <Link to="/">Back to home</Link>
    </div>
 );
};

export default ConfirmationPage;