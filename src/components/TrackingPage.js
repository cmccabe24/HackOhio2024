/* basic works /
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const TrackingPage = () => {

  const mapContainerStyle = {
    width: '100%',
    height: '400px',  // Set the height of the map
  };
  
  const center = {
    lat: 40.712776,  // Example: New York City latitude
    lng: -74.005974, // Example: New York City longitude
  };

  const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log("Key: ", googleApiKey);

  return (
    <div>
      <h2>Shipment Tracking</h2>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        />
      </LoadScript>
    </div>
  );
};

export default TrackingPage;
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const TrackingPage = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',  // Set the height of the map
  };
  
  const origin = {
    lat: 40.712776,  // Example: New York City latitude
    lng: -74.005974, // Example: New York City longitude
  };

  const destination = {
    lat: 39.9612,  // Example: New York City latitude (destination)
    lng: -82.9988  // Example: New York City longitude (destination)
  };

  const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const [currentLocation, setCurrentLocation] = useState(origin);
  const [mapCenter, setMapCenter] = useState(origin);

  useEffect(() => {    
    const movePackage = () => {
      const totalSteps = 1000; // Number of steps to reach the destination
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        if (step <= totalSteps) {
          const newLat = origin.lat + (destination.lat - origin.lat) * (step / totalSteps);
          const newLng = origin.lng + (destination.lng - origin.lng) * (step / totalSteps);
          setCurrentLocation({ lat: newLat, lng: newLng });
        } else {
          clearInterval(interval); // Stop the interval when the package reaches the destination
          setCurrentLocation(destination); // Ensure we end at the destination
        }
      }, 100); // Update every 100 milliseconds
      
      return () => clearInterval(interval); // Clean up interval on unmount
    };

    movePackage(); // Start the package movement simulation
  }, []);

  const focusOnPackage = () => {
    console.log("Curr Loc: ", currentLocation);
    setMapCenter(currentLocation);
  }

  // Set icon details only when google is available
  const markerIcon = window.google ? {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker icon URL
    scaledSize: new window.google.maps.Size(40, 40), // Size of the marker
  } : undefined; // Fallback to undefined if google is not loaded

  return (
    <div>
      <h2>Shipment Tracking</h2>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <LoadScript googleMapsApiKey={googleApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={10}
          mapId="DEMO_MAP_ID"
        >
        {/* Only render marker if google is loaded */}
        {markerIcon && (
          <Marker
            position={currentLocation} 
            title="Package Location"
            icon={markerIcon} // Use the icon variable
          />
        )}
        </GoogleMap>
      </LoadScript>
      <button onClick={focusOnPackage}>Focus on Current Location</button>
    </div>
  );
};

export default TrackingPage;

