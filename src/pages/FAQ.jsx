
import React from 'react';
import '../styling/faqStyling.css';

const FaqPage = () => {
    return (
        <div className="faq-page">
      <h1>FAQ</h1>
      <div className="faq-section">
        <h2>Reservation</h2>
        <div className="faq-item">
          <h3>What are the cancellation policies?</h3>
          <p>
            You can cancel your reservation for free up to 48 hours before the rental date. If you cancel later or fail to show up, you may be charged a full day's rental rate.
          </p>
        </div>
        <div className="faq-item">
          <h3>What time should I be at the pick-up location?</h3>
          <p>
            Please be at the pick-up location at least 15 minutes before your scheduled pick-up time.
          </p>
        </div>
      </div>
      <div className="faq-section">
        <h2>Rental Car</h2>
        <div className="faq-item">
          <h3>What are the rental car options?</h3>
          <p>
            We offer various car types and classes, such as economy, compact, mid-size, full-size, luxury, and premium cars.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are the rental car ages and types?</h3>
          <p>
            We have vehicles that are at least 10 years old. Some vehicles are smaller and suitable for urban driving, while others are larger and more suitable for family trips.
          </p>
        </div>
      </div>
    </div>
 );
};

export default FaqPage;