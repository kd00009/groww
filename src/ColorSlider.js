import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './style.css'

const ColorSlider = () => {
  return (
    <div className="main">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid container-sm">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
            <span>  Groww</span>
          </a>
          <form className="d-flex" role="search">
            <div className="input-group">
              <button className="btn btn-outline" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <button className="btn btn-outline" type="button">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default ColorSlider;
