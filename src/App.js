import React from 'react';
import './App.css';

// import 'node-sass';
//Components
import SignIn from './Components/SignIn'
import FoodCard from './Components/FoodCard'
function App() {
  return (
    <div className="App">
      {/* <SignIn></SignIn> */}
      <FoodCard></FoodCard>
    </div>
  );
}

export default App;
