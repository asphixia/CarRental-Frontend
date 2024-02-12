import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default ErrorPage;