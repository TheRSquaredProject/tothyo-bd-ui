import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "./section.css";

export default function Section(props) {
  let { title, children } = props;
  return (
    <div>
      <Paper className="section">
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        {children}
      </Paper>
    </div>
  );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}