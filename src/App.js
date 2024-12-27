//import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
//import Form from './components/Form'
import ViewData from "./components/ViewData"; // Data viewing page
import SignupForm from "./components/SignupForm"; // Data viewing page
import LoginPage from "./components/LoginPage"; // Data viewing page
//import DashboardPage from './components/DashboardPage'; // The page to redirect after login
import PrivateRoute from './PrivateRoute'; // The new PrivateRoute component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  return (
    <Router>
    <div className="p-4">
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          {isLoggedIn && (
          <li>
            <Link to="/dashboard" className="mr-4">Dashboard</Link>
          </li>
        )}
{!isLoggedIn && (
          <li>
            <Link to="/sign-up" className="mr-4">Sign Up</Link>
          </li>
        )}

          {/* Conditionally render the login link based on login state */}
        {!isLoggedIn && (
          <li>
            <Link to="/" className="mr-4">Login</Link>
          </li>
        )}
        </ul>
      </nav>

      <Routes>

        
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        {/* Private Route for Dashboard */}
        <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ViewData />
              </PrivateRoute>
            }
          />

      </Routes>
    </div>
  </Router>
  );
};

export default App;
