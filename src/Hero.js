import React, { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import Content from './components/Content';

import { Faq } from './components/Faq';

import Divtxt from './components/Divtxt';
import Mtfund from './components/Mtfund';
export const Hero = () => {
  const [activeButton, setActiveButton] = useState('sip');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="hero ml-1 mr-1">
        <div>
          <h4 className="ml-3">SIP Calculator</h4>
        </div>
        <div>
          <button
            className={`btn btn-outline-success ml-4 ${activeButton === 'sip' ? 'active' : ''} ` }
            onClick={() => handleButtonClick('sip')}
          >
            sip
          </button>
          <button
            className={`btn btn-outline-success ml-4 ${activeButton === 'lumpsum' ? 'active' : ''}`}
            onClick={() => handleButtonClick('lumpsum')}
          >
            lumpsum
          </button>
        </div>
        <div className="ml-3 mt-4">
          
          <Header />

         
          <Content />
          <Table />
     
          <Faq />  
        
          <Divtxt />
          <Mtfund />

          <Footer />
         


        </div>
      </div>
    </>
  );
};
