import React, { Component } from 'react';
import "./Photo.css";




class Navbar extends Component {

  render () {
    return (

        <div className="welcomeHeader">
          <h1>Welcome to Zillow </h1>
          <h2>The famous house from Home Alone is now the newest rental property on the market!</h2>
          <h3>671 Lincoln Ave, Winnetka, IL 60093</h3>
        </div>
    )
  }
}

export default Navbar;