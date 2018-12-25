import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
        selected: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleDropdownChange(event);
    this.setState({
        selected:event.target.value
    })
  }
  renderMenuItems(items) {
    return items.map(item => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));
  }
  render() {
    let { items } = this.props;

    let formControlStyle = {
        margin: '5px',
        minWidth: 150,
      };
    
    return (
      <FormControl style={formControlStyle}>
        <InputLabel htmlFor="zilaName">Select a Zila</InputLabel>
        <Select value={this.state.selected} onChange={this.handleChange} autoWidth={true} >
          {this.renderMenuItems(items)}
        </Select>
      </FormControl>
    );
  }
}

export default Dropdown;
