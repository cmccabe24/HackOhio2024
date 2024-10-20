import React from 'react';
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
