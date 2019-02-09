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

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <section
        className="hero is-fullheight"
        style={{
          background: "url(images/cover.jpg)",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">儲ける方法</h1>
            <p className="is-size-3">何もせずに月300万円稼ぐ方法があります。</p>
            <p className="is-size-3">
              そんな夢のような方法を教えます。あなたも億万長者になりましょう。
            </p>
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                  placeholder="お名前"
                />
              </div>
            </div>
            <button
              className="button is-primary is-large"
              onClick={() => {
                location.href = `invoice.html#${this.state.name}`;
              }}
            >
              もっと詳しく
            </button>
          </div>
        </div>
      </section>
    );
  }
}

class App extends React.Component {
  render() {
    return <Top />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
