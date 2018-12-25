import React, { Component } from "react";
import TothyoBdView from "./TothyoBdView";
import {fetchZilaData, parseZilaNames} from "../../data/zilaData.js";
import * as ds from "../../data/dataStore";

class TothyoBdContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  getZilaData() {
    fetchZilaData().then(resp => {
      ds.setZilaData(resp);
      ds.setZilaNames(parseZilaNames(resp));

      this.setState({
        loading: false
      });
    });
  }

  componentDidMount() {
    this.getZilaData();
  }

  render() {
    let data = ds.getZilaData();
    let zilaNames = ds.getZilaNames();

    return (
      <div>
        {!this.state.loading && (
          <TothyoBdView zilas={data} zilaNames={zilaNames} />
        )}
      </div>
    );
  }
}

export default TothyoBdContainer;
