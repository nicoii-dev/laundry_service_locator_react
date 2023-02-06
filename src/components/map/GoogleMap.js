import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function CustomMap({ google, locations = [] }) {
  return (
    <Map
      google={google}
      containerStyle={{
        position: "static",
        width: "100%",
        height: "100%",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      center={locations[0]}
      initialCenter={locations[0]}
      zoom={locations.length === 1 ? 18 : 13}
      disableDefaultUI={true}
    >
      {/* {locations.map((coords) => (
        <Marker position={coords} />
      ))} */}
      <Marker
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={{ lat: 37.778519, lng: -122.40564 }}
        
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBo6TendQ3OkRcY6nEO_0Xdv7FRzIRjUdE",
})(CustomMap);
