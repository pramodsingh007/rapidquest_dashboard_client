// MapComponent.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinates } from "../../utils/geoCode";

// const cities = [
//   { city: "Austin", value: 1 },
//   { city: "San Jose", value: 5 }
// ];

const MapComponent = ({ data }) => {
  const [locations, setLocations] = useState([]);
  const [mapCenter, setMapCenter] = useState([30.2672, -97.7431]); // Default center
  const [zoomLevel, setZoomLevel] = useState(5);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const locationPromises = data?.map(async (location) => {
        console.log(location);
        const coords = await getCoordinates(location.city);
        return {
          ...location,
          lat: coords ? parseFloat(coords.lat) : 0,
          lng: coords ? parseFloat(coords.lon) : 0,
        };
      });
      const results = await Promise.all(locationPromises);
      console.log(results);
      setLocations(results);

      // Calculate the center of the map based on the data
      const latitudes = results
        .map((loc) => loc.lat)
        .filter((lat) => lat !== 0);
      const longitudes = results
        .map((loc) => loc.lng)
        .filter((lng) => lng !== 0);
      if (latitudes.length > 0 && longitudes.length > 0) {
        const centerLat = (Math.min(...latitudes) + Math.max(...latitudes)) / 2;
        const centerLng =
          (Math.min(...longitudes) + Math.max(...longitudes)) / 2;
        setMapCenter([centerLat, centerLng]);
        setZoomLevel(12);
      }
    };

    fetchCoordinates();
  }, [data]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Geographical Distribution of Customers
      </h2>
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>
              {location.city} <br /> Count: {location.value}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
