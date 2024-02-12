import React, { useState } from 'react';
import '../styling/carPageStyling.css';
import SearchBar from '../components/SearchBar';
import cars from '../components/CarsArray';
import { Link, useNavigate } from 'react-router-dom';

const CarPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.toLowerCase());
  };

  const filteredCars = cars.filter((car) => 
    car.brand.toLowerCase().includes(search) || 
    car.model.toLowerCase().includes(search)
  );

  const handleCarSelect = (car) => {
    setSelectedCar(car);

    navigate(`/cars/${car.id}`, { state: { selectedCar: car } });
  }; 

  return (
    <div className="rental-car-list-page">
      <h1>Rental Car List</h1>
      <SearchBar search={search} onSearchChange={handleSearch} />

      <div className="rental-car-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="rental-car-card">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <h2>{car.brand} {car.model}</h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Price:</strong> ${car.price}</p>
            <button onClick={() => handleCarSelect(car)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarPage;