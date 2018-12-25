import React, { Component } from "react";
import Header from "../header/Header";
import Typography from "@material-ui/core/Typography";
import Section from "../section/Section";
import Dropdown from "../dropdown/Dropdown";
import Zila from "../../model/Zila";

import "./tothyobd.css";

class TothyoBdView extends Component {
  constructor(){
    super();
    this.state = {
      zila: "Dhaka"
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  createZilaCollection(zilas){
    return zilas.map(zilaData => new Zila(zilaData));
  }
  renderZilas(zilas) {
    return zilas.map(zila => <div>{zila}</div>);
  }

  handleDropdownChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="landing-page">
        <Header />
        <Typography component="h1" variant="h2" gutterBottom={true}>
            Tothyo Bangladesh
        </Typography>
        <Section title="Title">
            <Dropdown items={this.props.zilaNames} value={this.state.zila} handleDropdownChange={this.handleDropdownChange}/>
        </Section>
      </div>
    );
  }
}

export default TothyoBdView;
