import React, { Component } from "react";
import TothyoBdView from "./TothyoBdView";
import ApiData from '../data/ApiData'

class TothyoBdContainer extends Component {
  render() {
    return (
      <div>
        <TothyoBdView />
        <ApiData />
      </div>
    );
  }
}

export default TothyoBdContainer;
