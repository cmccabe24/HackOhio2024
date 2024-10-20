import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"; // Reverted to use Marker
import '../static/TrackingPage.css';  // Assuming you have the CSS file


const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.712776,  // Start coordinates (example: New York City)
  lng: -74.005974,
};

const TrackingPage = () => {
  const [position, setPosition] = useState(center);

  useEffect(() => {
    // Simulating the shipment's movement by updating position
    const interval = setInterval(() => {
      setPosition(prevPos => ({
        lat: prevPos.lat + 0.001,  // Simulated increment in latitude
        lng: prevPos.lng + 0.001   // Simulated increment in longitude
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <div className="trackingPage">
      <h2>Shipment Tracking</h2>
      <div className="mapContainer">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={position}
          >
            <Marker position={position} title="Shipment Location" />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default TrackingPage;
