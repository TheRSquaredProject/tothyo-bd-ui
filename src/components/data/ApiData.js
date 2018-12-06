import React, { Component } from 'react';
import $ from 'jquery';
import Item from './Item'
import ItemList from './ItemList'
import Zilas from './Zilas'

class ApiData extends Component {

    constructor(){
      super();
      this.state = {
        Data: [],
        zila: ''
      }
      this.changeZila = this.changeZila.bind(this);
    }
  
    getItems(){
      $.ajax({
        url: 'http://tothyobangladesh-env.8mj2vjzjpz.us-east-1.elasticbeanstalk.com/api/zila/'+this.state.zila,
        dataType: 'json',
        cache: false,
        success: (data) => {
          this.setState({Data: data})
        },
        error: (xhr, status, err) => {
          console.log(err);
        }
      })
    }
  
    changeZila(){
      var zilas = document.getElementById("zilas");
      var zila = zilas.options[zilas.selectedIndex].value;
      console.log(zila);
      this.setState({zila: zila})
      this.getItems();
    }
  
    componentWillMount(){
      this.getItems();
    }
  
  
    render() {
  
      document.addEventListener('change', this.changeZila)
  
      //console.log(this.state.Data.location_data.zila);
      return ( 
        <div>
        {
          <Zilas />
        }
          {
            this.state.zila == '' &&
            <ItemList itemList={this.state.Data} />
          }
          {
            this.state.zila != '' &&
            <div>
              <h3>{this.state.zila}</h3>
              <Item item={this.state.Data} />
            </div>
          }
        </div>
      );
    }
  }
  
  export default ApiData;