import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.content}</h1>
      </div>
    );
  }
}

export default Content;