import React from "react";
import "./App.css";
import GasBox from "./GasBox.js";
import ElectricityBox from "./ElectricityBox.js";
import EnergyImage from "./Energy-Logo.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Shine Energy Inc</title>
        <img className="image" src={EnergyImage} alt="energyImage"/>
        <h1>Shine Energy Calculator</h1>
      </header>
      <div className="calculcation">
        <div className="parent">
          <div className="kids">
            <GasBox />
          </div>
          <div className="kids">
            <ElectricityBox />
          </div>
        </div>
      </div>
    </div>
  );
}
