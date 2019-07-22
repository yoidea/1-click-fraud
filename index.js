const { HashRouter, Route, Link } = window.ReactRouterDOM;

class Invoice extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">登録完了</h1>
              <p className="is-size-3">
                お客様の会員登録が正常に完了しました。
              </p>
              <p className="is-size-3 has-text-danger">
                3日以内に<span className="has-text-weight-bold">98,000円</span>
                お支払い下さい。
              </p>
              <p className="is-size-3 has-text-danger">
                お支払いが確認できない場合は
                <span className="has-text-weight-bold">法的処置</span>
                をとらせていただきますのでご注意下さい。
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">お問合せ</h1>
            <table className="table is-striped is-fullwidth">
              <tbody>
                <tr>
                  <td>電話番号</td>
                  <td>0120-999-999</td>
                </tr>
                <tr>
                  <td>メールアドレス</td>
                  <td>info@example.com</td>
                </tr>
              </tbody>
            </table>
            <h1 className="title">お振込先</h1>
            <table className="table is-striped is-fullwidth">
              <tbody>
                <tr>
                  <td>銀行名（銀行コード）</td>
                  <td>極道銀行（5910）</td>
                </tr>
                <tr>
                  <td>支店名（支店コード）</td>
                  <td>八草支店（893）</td>
                </tr>
                <tr>
                  <td>種別</td>
                  <td>普通預金</td>
                </tr>
                <tr>
                  <td>口座番号</td>
                  <td>59109393</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "写真を撮影しました",
      shown: false
    };
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
            <div
              className="notification"
              style={{
                display: this.state.shown ? "" : "none"
              }}
            >
              <progress
                className="progress is-small is-primary"
                max="100"
              ></progress>
              <p>{this.state.message}</p>
            </div>
            <h1 className="title is-1">儲ける方法</h1>
            <p className="is-size-3">何もせずに月300万円稼ぐ方法があります。</p>
            <p className="is-size-3">
              そんな夢のような方法を教えます。あなたも億万長者になりましょう。
            </p>
            <button
              className="button is-primary is-large"
              onClick={() => {
                this.setState({ shown: true });
                setTimeout(() => {
                  this.setState({ message: "写真を送信中..." });
                }, 800);
                setTimeout(() => {
                  this.setState({ message: "IPアドレス取得中..." });
                }, 1600);
                setTimeout(() => {
                  this.setState({ message: "IPアドレスから住所特定中..." });
                }, 2400);
                setTimeout(() => {
                  this.setState({ message: "情報送信中..." });
                }, 3200);
                setTimeout(() => {
                  this.props.history.push("/invoice");
                }, 4000);
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
    return (
      <HashRouter>
        <Route exact path="/" component={Top} />
        <Route exact path="/invoice" component={Invoice} />
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
