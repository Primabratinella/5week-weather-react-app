import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by 
          <a 
            href="https://www.shecodes.io/graduates/17245-karen-berglund" 
            target="_blank" 
            rel="noreferrer">
            Karen Berglund
          </a> {" "}
          and is open-sourced on {" "} 
          <a 
            href="https://github.com/Primabratinella/5week-weather-react-app"
            target="_blank" 
            rel="noreferrer">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
