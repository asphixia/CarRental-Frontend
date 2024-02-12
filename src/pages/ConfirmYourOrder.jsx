import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/confirmYourOrderPageStyling.css';

const ConfirmYourOrder = () => {

  const { state } = useLocation();
  const selectedCarData = state && state.selectedCarData;
  console.log('Selected car data retrieved from location state:', selectedCarData)

  return (
    <div className="confirm-order-container">
      <h1>Confirm Your Order</h1>
      {selectedCarData && (
        <div>
          <p><strong>Brand:</strong> {selectedCarData.brand}</p>
          <p><strong>Model:</strong> {selectedCarData.model}</p>
          <p><strong>Price:</strong> ${selectedCarData.price}</p>
          <img src={selectedCarData.image} alt={`${selectedCarData.brand} ${selectedCarData.model}`} />
        </div>
      )}
      <Link to="/confirmation" className="confirm-order-link">Proceed to Order Confirmation</Link>
    </div>
  );
};

export default ConfirmYourOrder;