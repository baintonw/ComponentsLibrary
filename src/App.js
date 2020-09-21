import React from 'react';
import './App.css';




// import 'node-sass';
//Components
import SignIn from './Components/Login/SignIn'
import FoodCard from './Components/Cards/FoodCard'
import WrappedMap from './Components/Maps/Map'
import Card from './Components/Cards/Card'
// @react-google-maps/api
import Map from './Components/Maps/GoogleMap'




function App() {
  return (
    <div className="App">
      {/* <SignIn></SignIn> */}
      {/* <FoodCard></FoodCard> */}
      {/* <div className="wrapped-map-wrapper">
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div> */}
      {/* <Map></Map> */}
      <Card></Card>
    </div>
  );
}

export default App;
