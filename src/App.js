import React from "react";
import "./App.css";
import GasBox from "./GasBox.js";
import ElectricityBox from "./ElectricityBox.js";
import EnergyImage from "./Energy-Logo.png";
import GasLogo from "./Gas-Logo.png";
import LightBulb from "./Light-Bulb-Logo.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Energy Inc</title>
        <img src={EnergyImage} alt="energyImage" />
      </header>
      <div className="calculation-container">
        <div className="calculation">
        <h1>Energy Calculator</h1>
          <div className="parent">
            <div className="kids">
            <br />
              <img className="Gas-Logo" src={GasLogo} alt="Gas Logo" />
              <br />
              <br />
              <GasBox />
            </div>
            <br />
            <div className="kids">
            <br />
              <img className="Elec-Logo" src={LightBulb} alt="Gas Logo" />
              <br />
              <br />
              <ElectricityBox />
              <p>Created by <a href="https://github.com/Keivon">Keivon Proctor</a> & <a href="https://github.com/JackBPainter">Jack Painter</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
