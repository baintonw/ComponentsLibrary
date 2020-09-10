import React from 'react';
import './App.css';

//Google Maps React
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


// import 'node-sass';
//Components
import SignIn from './Components/SignIn'
import FoodCard from './Components/FoodCard'
import WrappedMap from './Components/Maps/Map'
import MapNew from './Components/Maps/MapNew'


function App() {
  return (
    <div className="App">
      {/* <SignIn></SignIn> */}
      {/* <FoodCard></FoodCard> */}
      <div className="wrapped-map-wrapper">
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      {/* <MapNew></MapNew> */}
    </div>
  );
}

export default App;
