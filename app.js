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
            <h1 className="title">儲ける方法</h1>
            <p className="subtitle">何もせずに月300万円稼ぐ方法があります。</p>
            <p>
              そんな夢のような方法を教えます。あなたも億万長者になりましょう。
            </p>
            <button className="button is-primary is-large">もっと詳しく</button>
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
