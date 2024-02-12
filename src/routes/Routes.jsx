import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cars from '../pages/cars';
import HomePage from '../pages/HomePage';
import FaqPage from '../pages/FAQ';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrePage';
import CarInfoPage from '../pages/CarInfoPage';
import cars from '../components/CarsArray';
import ConfirmationPage from '../pages/ConfirmationPage';
import ConfirmYourOrder from '../pages/ConfirmYourOrder';

const MyRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/FAQ" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/cars/:id" element={<CarInfoPage cars={cars} />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/orderconfirmation" element={<ConfirmYourOrder />} />
      </Routes>
    );
}

export default MyRoutes;