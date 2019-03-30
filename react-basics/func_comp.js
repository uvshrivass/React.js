// Defining a React component in JS function way
// Its just a function which accepts "props" and returns an element

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

// The ES6 class syntax to write components

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  