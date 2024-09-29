import React from 'react';
import Navbar from './components/Navbar'; // Ensure the path and file name match exactly
import InfoSection from './components/InfoSection'; // Ensure the path and file name match exactly
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h2>Welcome to Speedster Bike Shop</h2>
        <InfoSection />
      </div>
    </div>
  );
}

export default App;
