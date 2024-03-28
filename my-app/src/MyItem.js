import React from "react";

class Item extends React.Component{

    clickMe(){
        console.log("i clicked", this.props.name)
    }
    render(){
      return(
        <h1 onClick={() => this.clickMe()}>Hi there, my name is {this.props.name}</h1>
      )
    }
}

export default Item;