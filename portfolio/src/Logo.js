import React, { Component } from 'react';
class Logo extends Component {
  render() {
    return (
        <div className="row">
            <div className="col text-center"><a href="portfolio.html"><img src="logo.png" className="img-fluid" id="logo"/></a></div>
        </div>
    );
  }
}

export default Logo;