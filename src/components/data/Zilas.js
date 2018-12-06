import React, { Component } from 'react';
import $ from 'jquery'

class Zilas extends Component{

    // The following (upto componentWillMount()) was copied from 'ApiData.js'
    // going to come up with a workaround ASAP to not copy

    constructor() {
        super();
        this.state = {
            Data: []
        }
    }

    getItems() {
        $.ajax({
            url: 'http://tothyobangladesh-env.8mj2vjzjpz.us-east-1.elasticbeanstalk.com/api/zila/',
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({
                    Data: data
                })
            },
            error: (xhr, status, err) => {
                console.log(err);
            }
        })
    }

    componentWillMount() {
        this.getItems();
    }

    render(){

        let zilas;
        if(this.state.Data){
            zilas = this.state.Data.map(item => {
                console.log(item.location_data.zila);
                return(
                    <option>{item.location_data.zila}</option>
                );
            })
        }

        return(
            <select id="zilas">
                <option value=''>All</option>
                {zilas}
            </select>
        )
    }
}

export default Zilas;