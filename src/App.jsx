import React from 'react';
import MyRoutes from './routes/Routes';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import './styling/index.css';
import Footer from './components/Footer';

function App() {
    return (
        <div>
        <Router>
            <div>
                <NavBar />
                <MyRoutes />
            </div>
        </Router>
        <Footer />
        </div>
    );
}

export default App;