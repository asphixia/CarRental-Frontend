import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styling/carInfoPageStyling.css';

const CarInfoPage = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h1>Car not found</h1>;
  }

  return (
    <div>
      <h1>{car.brand} {car.model}</h1>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Price:</strong> ${car.price}</p>

    
      <img src={car.image} alt={`${car.brand} ${car.model}`} />

      <div className="full-width-wrapper">
        <div className="button-container">
          <Link to="/cars" className="button-style">Back to cars</Link>
          <Link to="/login" state={{ selectedCarData: car }} className="button-style button-right">Login to order</Link>
        </div>
      </div>
    </div>
  );
};

export default CarInfoPage;