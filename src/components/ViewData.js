import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/data`, {
          method: 'GET',
          headers: {
            'Authorization': token,
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Submitted Data</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
    {data.map((row, index) => {
      // Skip rendering the first row (index 0)
      if (index === 0) return null;

      return (
        <tr key={index} className="bg-gray-100">
          <td className="px-4 py-2 border">{row[0]}</td>
          <td className="px-4 py-2 border">{row[1]}</td>
          <td className="px-4 py-2 border">{row[2]}</td>
        </tr>
      );
    })}
  </tbody>
      </table>
    </div>
  );
};

export default ViewData;
