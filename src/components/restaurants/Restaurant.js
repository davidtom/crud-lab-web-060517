import React, { Component } from 'react';

class Restaurant extends Component {

  handleOnClick(event){
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={(event)=>this.handleOnClick(event)}>X</button>
      </div>
    );
  }
};

export default Restaurant;
