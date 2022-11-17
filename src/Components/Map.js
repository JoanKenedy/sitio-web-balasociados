import React from "react";
import GoogleMaps from "simple-react-google-maps";
/*19.375254, -99.184868*/
const API_KEY = "AIzaSyBmKDcaO69oq4GsnIvGU4X6YhFLSMYMQGg";
const Map = () => {
  return (
    <div className="container-map">
      <GoogleMaps
        apiKey={API_KEY}
        style={{ width: "100%", height: "370px" }}
        zoom={10}
        center={{
          lat: 19.375224,
          lng: -99.184868,
        }}
        markers={{
          lat: 19.375224,
          lng: -99.184868,
        }}
      />
    </div>
  );
};

export default Map;
