import React from 'react';
import './Header.css';
import appp from '../app.png'
import appp2 from '../app2.png' 

import { FaInstagram, FaFacebook, FaTelegram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

import logo from '../logo.png';


const Footer = () => {
  return (
    <>
      <center>
        <div className='ml-5 mr-5 mt-3'>© 2023 Groww. All Rights reserved, built with 💖 in India version - 4.0.0</div>
      </center>
    <div className='bg-gray-200'>
        <div className="social-icons d-flex justify-evenly mb-2 mt-2 p-2" >
      <a href="https://www.instagram.com">
        <FaInstagram style={{ color: 'red' }} />
      </a>
      <a href="https://www.facebook.com">
        <FaFacebook />
      </a>
      <a href="https://www.telegram.org">
        <FaTelegram />
      </a>
      <a href="https://www.linkedin.com">
        <FaLinkedin />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter style={{ color: 'blue' }}  />
      </a>
      <a href="https://www.youtube.com">
        <FaYoutube style={{ color: 'red' }} />
      </a>
      <a href="https://www.youtube.com">
          <FiPhone style={{ color: 'dark-blue' }} /> 
      </a>
    </div>
      <div className='feature d-flex justify-between p-2'>
        <div>
          <div className='mt-5'>
            <img src={logo} alt="logo" width="30" height="30" className="d-inline-block ml-3" /><span className='font-500 pl-1'>Groww </span> 
          </div>
        </div>
        <div>
          <p>vishnavi tech park</p>
          <p>3rd and 4th floor, sarjapur main road</p>
          <p>bellandur, bengluru - 56013</p>
        </div>
      </div>
    
      <div>
        <table className="table table-borderless mx-auto ml-5">
          <tbody>
            <tr>
              <td className='mb-4 text-gray-700'><h3>Products</h3></td>
              <td className='mb-4 text-gray-700'><h3>Groww</h3></td>
              <td className='mb-4 text-gray-700'><h3>Quick links</h3></td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>about us</td>
              <td>calculator</td>
            </tr>
            <tr>
              <td colSpan="1">future and options</td>
              <td>pricing</td>
              <td>open dmat account</td>
            </tr>
            <tr>
              <td colSpan="1">us stocks</td>
              <td>blogs</td>
              <td>grow digest</td>
            </tr>
            <tr>
              <td colSpan="1">credit</td>
              <td>media and press</td>
              <td>download forms</td>
            </tr>
            <tr>
              <td colSpan="1"></td>
              <td>AMC</td>
              <td>sitemap</td>
            </tr>
            <tr>
              <td colSpan="1"></td>
              <td>Career</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="1"></td>
              <td>help and support</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
 
    <div className="download-section d-flex flex-row justify-between">
  <a href="/" className="download-button">
    <img src={appp2} alt="App Store" class="store-icon" />
  
  </a>
  <a href="/" className="download-button">
    <img src={appp} alt="Play Store" class="store-icon" />
   
  </a>
</div>

 
    </>
  );
};

export default Footer;
