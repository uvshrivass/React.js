import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

export default Header;