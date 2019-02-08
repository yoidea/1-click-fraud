class HelloWorld extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    );
  }
}

class App extends React.Component {
  render() {
    return <HelloWorld />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
