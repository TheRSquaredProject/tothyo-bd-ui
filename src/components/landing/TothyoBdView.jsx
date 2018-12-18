import React, { Component } from "react";
import Header from "../header/Header";
import Typography from "@material-ui/core/Typography";
import Section from "../section/Section";
import "./tothyobd.css";

class TothyoBdView extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <Typography component="h1" variant="h2" gutterBottom={true}>
            Tothyo Bangladesh
        </Typography>
        <Section title="Title">
            This is a section
        </Section>
      </div>
    );
  }
}

export default TothyoBdView;
