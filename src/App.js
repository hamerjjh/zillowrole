import React, { Component } from 'react';
import './App.css';
import Gallery from "./components/Gallery";
import Navbar from './components/Navbar';


class App extends Component {
  render () {
    return (

        <div>
        <Navbar />
        <Gallery />
        </div>
    )
  }
}

export default App;
