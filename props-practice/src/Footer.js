import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    
    constructor(props){
        super(props);
        this.state={
            footerstate : this.props.footer,

        }
    }
   
  render() {
    return (
      <div className="App">
        <h1>{this.state.footerstate}</h1>
      </div>
    );
  }
}

export default Footer;