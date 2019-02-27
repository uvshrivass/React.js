import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
                  <div>
                    <form action="/action_page.php">
                        First name:<br></br>
                        <input type="text" name="firstname" value="Mickey"></input>
                        <br></br>
                        Last name:<br></br>
                        <input type="text" name="lastname" value="Mouse"></input>
                        <br></br>
                        <input type="submit" value="Submit"></input>
                    </form>
                    </div>
    );
  }
}

export default App;
