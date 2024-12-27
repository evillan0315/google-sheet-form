import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ViewData from './components/ViewData'; // Data viewing page
import SignupForm from './components/SignupForm'; // Sign-up form
import LoginPage from './components/LoginPage'; // Login page
import PrivateRoute from './PrivateRoute'; // PrivateRoute component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [authToken, setAuthToken] = useState(null); // Track authentication token

  // Check for token in localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setAuthToken(token);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setAuthToken(null);
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500">
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/dashboard" className="mr-4">
                  Dashboard
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/sign-up" className="mr-4">
                  Sign Up
                </Link>
              </li>
            )}
            {!isLoggedIn ? (
              <li>
                <Link to="/sign-in" className="mr-4">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout} className="text-red-500">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route
            path="/sign-in"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} setAuthToken={setAuthToken} />}
          />
<Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ViewData authToken={authToken} />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
