import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LogInForm';
import facade from '../util/apiFacade';
import { useNavigate, useLocation } from 'react-router-dom';

function LoginPage() {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const selectedCarData = location.state && location.state.selectedCarData;
    if (selectedCarData) {
      localStorage.setItem('selectedCarData', JSON.stringify(selectedCarData));
      console.log();
    }
  }, [navigate, location]);

  const handleLogin = (username, password) => {
    if (!username || !password) {
      setLoginError('Please enter both username and password');
      return;
    }

    facade.login(username, password, (isLoggedIn) => {
      if (isLoggedIn) {
        
        const selectedCarData = JSON.parse(localStorage.getItem('selectedCarData'));
        if (selectedCarData) {
          
          navigate("/orderconfirmation", { state: { selectedCarData } });
        } else {
        
          navigate("/login");
        }
      } else {
        setLoginError('Invalid username or password');
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;