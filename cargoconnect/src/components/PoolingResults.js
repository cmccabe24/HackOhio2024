import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/PoolingResults.css";

const PoolingResults = () => {
  // Example hardcoded shipments and savings
  const [poolingOptions, setPoolingOptions] = useState([
    {
      id: 1,
      description: "Shipment with small electronics",
      matchPercentage: 85,
      individualCost: 120,
      pooledCost: 75,
      savings: 45, // Individual cost - pooled cost
    },
    {
      id: 2,
      description: "Shipment with office furniture",
      matchPercentage: 70,
      individualCost: 300,
      pooledCost: 200,
      savings: 100,
    },
    {
      id: 3,
      description: "Shipment with perishable food items",
      matchPercentage: 60,
      individualCost: 80,
      pooledCost: 65,
      savings: 15,
    },
  ]);

  // Function to calculate total savings for the user
  const calculateTotalSavings = () => {
    return poolingOptions.reduce((total, option) => total + option.savings, 0);
  };

  return (
    <div className="poolingResultsPage">
      <nav className="navBar">
        <Link to="/Home" className="navLink">Home</Link>
        <Link to="/Home/BookingPage" className="navLink">New Booking</Link>
      </nav>

      <div className="resultsContainer">
        <h2>Pooling Results</h2>
        <h4>Total Savings: ${calculateTotalSavings()}</h4>

        {poolingOptions.map((option) => (
          <div key={option.id} className="resultCard">
            <h3>{option.description}</h3>
            <p>Match Percentage: {option.matchPercentage}%</p>
            <p>Cost without pooling: ${option.individualCost}</p>
            <p>Pooled Cost: ${option.pooledCost}</p>
            <p>Savings: ${option.savings}</p>
          </div>
        ))}

        <div className="buttonsContainer">
          <button className="button">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PoolingResults;
