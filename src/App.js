import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import TothyoBdContainer from "../src/components/landing/TothyoBdContainer";

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <TothyoBdContainer />
      </div>
    );
  }
}

export default App;