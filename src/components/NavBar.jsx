import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/navBar.css';
import facade from '../util/apiFacade';


const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        facade.logout(() => {});
        navigate('/');
    }

    const isLoggedIn = !!localStorage.getItem('jwtToken');
    return (
        <nav>
             <ul>
                <li><Link to="/" className="navbar-item">Home</Link></li>
                <li><Link to="/Cars" className="navbar-item">Cars</Link></li>
                <li><Link to="/FAQ" className="navbar-item">FAQ</Link></li>

                {isLoggedIn && (
                    <li>
                        <button onClick={handleLogout} className='navbar-item logout-button'>
                            Logout
                        </button>
                    </li>
                )} 
            </ul>
        </nav>
    );
};

export default NavBar;