import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/done" component={Done} />
          </div>
        </Router>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/done">Done</Link>
      </div>
    );
  }
}

class Done extends Component {
  render() {
    return (
      <div>
        <h2>Done</h2>
      </div>
    );
  }
}

export default App;
