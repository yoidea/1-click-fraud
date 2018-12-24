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
        <h1>儲ける方法</h1>
        <h2>何もせずに月300万円稼ぐ方法があります。</h2>
        <p>そんな夢のような方法を教えます。あなたも億万長者になりましょう。</p>
        <Link to="/done">もっと詳しく</Link>
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
