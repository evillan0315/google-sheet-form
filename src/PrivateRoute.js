import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component checks if the user is logged in
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    return <Navigate to="/sign-in" replace />;
  }

  // If logged in, render the children (protected route)
  return children;
};

export default PrivateRoute;
