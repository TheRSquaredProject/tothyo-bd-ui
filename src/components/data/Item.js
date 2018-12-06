import React, { Component } from 'react';

class Item extends Component{
    render(){
        let printProp = (item, prop) => {
            if(typeof item === 'object') {
                let returner = [];
                returner.push(<h3>{prop}</h3>)
                returner.push(showItem(item))
                return(<ul>{returner}</ul>)
            } else {
                return(<li><strong>{prop}: </strong>{item}</li>)
            }
        }

        let showItem = (item) => {
            let returner = []
            for(let prop in item){
                returner.push(printProp(item[prop], prop))
            }
            return(<ul> {returner} </ul>)
        }

        return(
            <div id={this.props.id}>
            {showItem(this.props.item)}
            </div>
        );
    }
}

export default Item;