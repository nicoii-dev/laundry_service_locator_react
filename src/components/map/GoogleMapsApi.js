import React, { useState, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function GoogleMapsApi() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const infoWindowLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }

  const position = { lat: 8.454236, lng: 124.631897 }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <InfoWindow onLoad={infoWindowLoad} position={position}>
        <div style={{backgroundColor: 'white', border: '1px solid #ccc', padding: 15}}>
          <h1>InfoWindow</h1>
        </div>
      </InfoWindow>
      <Marker position={position}>

      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMapsApi;
