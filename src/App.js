//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Form from './components/Form'
import ViewData from "./components/ViewData"; // Data viewing page

const App = () => {
  return (
    <Router>
    <div className="p-4">
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/view-data" className="text-blue-500">View Data</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/view-data" element={<ViewData />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
