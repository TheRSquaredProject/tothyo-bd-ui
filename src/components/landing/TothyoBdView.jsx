import React, { Component } from "react";
import Header from "../header/Header";
import Typography from "@material-ui/core/Typography";
import Section from "../section/Section";
import Dropdown from "../dropdown/Dropdown";
import Zila from "../../model/Zila";
import ZilaComp from "../zila/Zila";

import "./tothyobd.css";

class TothyoBdView extends Component {
  constructor(){
    super();
    this.state = {
      zila: "DHAKA",
      zilaData: {}
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  getSelectedZilaInfo(zilas, selectedZila){
    let zilaData = zilas.filter(zila => zila.location_data.zila === selectedZila);

    return new Zila(zilaData[0]);
  }

  handleDropdownChange(event) {
    this.setState({
      zila: event.target.value
    })
  }

  render() {
    let { zilas } = this.props;
    let zila = this.getSelectedZilaInfo(zilas, this.state.zila);

    return (
      <div className="landing-page">
        <Header />
        <Typography component="h1" variant="h2" gutterBottom={true}>
            Tothyo Bangladesh
        </Typography>
        <Section title="Title">
            <Dropdown items={this.props.zilaNames} value={this.state.zila} handleDropdownChange={this.handleDropdownChange}/>
        </Section>
        <Section title={this.state.zila}>
          <ZilaComp zilaName={this.state.zila} zila={zila}/>
        </Section>
      </div>
    );
  }
}

export default TothyoBdView;
