import React, {Component    } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    state ={
        header : "Hello there, I am from Header component",
        content : "Hello there, I am from Content component",
        footer : "Hello there, I am from Footer component"
    }
    render() {
      return (
        <div className="App">
          <Header header = {this.state.header}/>
          <Content content = {this.state.content}/>
          <Footer footer = {this.state.footer} />
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));

