import React, { useState } from 'react';
import './Header.css';
import { calculateSIPReturns } from './formula'; // Import the formula calculation function

const Header = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState(0);

  const handleSliderChange = (event, inputType) => {
    const value = parseFloat(event.target.value);

    if (inputType === 'monthlyInvestment') {
      setMonthlyInvestment(value);
    } else if (inputType === 'timePeriod') {
      setTimePeriod(value);
    } else if (inputType === 'expectedReturnRate') {
      setExpectedReturnRate(value);
    }
  };

  // Calculate the estimated returns using the formula
  const estimatedReturns = calculateSIPReturns(monthlyInvestment, timePeriod, expectedReturnRate);

  // Define the desired color for the SVG paths
  const pathColor = '#7F00FF'; // Purple color

  return (
    <div className="mb-3">
      <div>
      <div>
      <div className="d-flex justify-content-between">
          <div className="slidermargin flex-2">Monthly Investment: </div>
          <div className="slidermargin2 text-center  bg-green-300">{monthlyInvestment}</div>
        </div>
        <p> </p>
        <input
          className="w-100 slider"
          type="range"
          min="0"
          max="100000"
          step="10"
          onChange={(event) => handleSliderChange(event, 'monthlyInvestment')}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="slidermargin flex-2">Time Period: </div>
          <div className="slidermargin2 text-center bg-green-300 ">{timePeriod}</div>
        </div>
        <input
          className="w-100 slider"
          type="range"
          min="0"
          max="40"
          step="0.5"
          onChange={(event) => handleSliderChange(event, 'timePeriod')}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="slidermargin flex-2">Expected Return Rate: </div>
          <div className="slidermargin2 text-center bg-green-300 overflow-hidden">{expectedReturnRate}</div>
        </div>
        <input
          className="w-100 slider"
          type="range"
          min="0"
          max="30"
          step="1"
          onChange={(event) => handleSliderChange(event, 'expectedReturnRate')}
        />
      </div>
      </div>

      <div className="rounded mx-auto d-block align-middle boxx p-2">
        <div className="d-flex justify-content-between">
          <span className="slidermargin w-40">Invested Amount: </span>
          <span>₹{monthlyInvestment * timePeriod}</span>
        </div>
        <div className="d-flex justify-content-between">
          <div className="slidermargin flex-2">Est. Returns: </div>
          <span>₹{estimatedReturns}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="slidermargin ">Total Value: </span>
          <span>₹{monthlyInvestment * timePeriod + estimatedReturns}</span>
        </div>
        <center>
          <svg width="220" height="220">
            <g transform="translate(110,110)">
              <g>
                <path
                  d="M6.735557395310443e-15,-110A110,110,0,1,1,-11.374288704127851,109.41035397289943L-7.238183720808633,69.62477071002691A70,70,0,1,0,4.2862637970157365e-15,-70Z"
                  fill={pathColor} // Set the fill color to the desired value
                  stroke={pathColor} // Set the stroke color to the desired value
                ></path>
              </g>
              <g>
                <path
                  d="M-11.374288704127851,109.41035397289943A110,110,0,0,1,-2.0206672185931328e-14,-110L-1.2858791391047208e-14,-70A70,70,0,0,0,-7.238183720808633,69.62477071002691Z"
                  fill={pathColor} // Set the fill color to the desired value
                  stroke={pathColor} // Set the stroke color to the desired value
                ></path>
              </g>
              <g></g>
            </g>
          </svg>
          <div className="mt-4">
            <span className="mr-5">Invested Value</span>
            <span className="ml-5">Est. Returns</span>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Header;
