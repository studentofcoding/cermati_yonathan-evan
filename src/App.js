/**
 * This is the class name and for the corelated section of the page :
 * *  notification-top  = Top page notification for Term of Services, etc.
 * *  content-top       = Location for Introduction section
 * *  content-bottom    = Location for How Can I Help You section
 * 
 * 
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="web-container">
      <header className="top-notif">
      </header>
      <div className="top-content">
        <div className="logo-container">
          <img src="logo.png" alt="y-logo" className="app-logo"/>
        </div>
        <div className="top-details">
          <h2>
            Hello! I'm Yonathan Evan.
          </h2>
          <h2 className="bold">
            Consult, Design, and Develop Websites
          </h2>
          <p>
            Have something great in mind? Feel free to contact me.
          </p>
          <p>
            I'll help you make it happen.
          </p>
          <button className="call-to-action">
            Let's make contact
          </button>
        </div>
      </div>
      <div className="botttom-content_grid">
        <div className="bottom-header_row">
          <h2>
            How Can I Help You?
          </h2>
          <p>
            Our work then targeted, best practices outcomes social innovation synergy.
          </p>
          <p>
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
          </p>
          <p>
            program areas scale.
          </p>
        </div>
        <div className="bottom-body_row">

        </div>
      </div>
      <footer className="footer">
        © 2019 Yonathan Evan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
