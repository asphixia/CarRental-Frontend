

import React from 'react';
import Video from '../assets/CarVideo.mp4';
import '../styling/homePageStyling.css';

const HomePage = () => {
    return (
        <div className="home-page">
          <video className="background-video" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="content">
            <h1 className="title">Welcome to Our Rental Car Platform</h1>
            <button className="navigate-button" onClick={event => window.location.href = '/Cars'}>Browse Cars</button>
          </div>
        </div>
     );
};

export default HomePage;