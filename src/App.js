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
        <h1>登録完了</h1>
        <p>お客様の会員登録が正常に完了しました。</p>
        <p>3日以内に<strong>98,000円</strong>お支払い下さい。</p>
        <p>お支払いが確認できない場合は<strong>法的処置</strong>をとらせていただきますのでご注意下さい。</p>
        <h2>お問合せ</h2>
        <table>
          <tr>
            <td>電話番号</td>
            <td>0120-999-999</td>
          </tr>
          <tr>
            <td>メールアドレス</td>
            <td>info@example.com</td>
          </tr>
        </table>
        <h2>お振込先</h2>
        <table>
          <tr>
            <td>銀行名(銀行コード)</td>
            <td>極道銀行(5901)</td>
          </tr>
          <tr>
            <td>支店名(支店コード)</td>
            <td>八草支店(893)</td>
          </tr>
          <tr>
            <td>種別</td>
            <td>普通預金</td>
          </tr>
          <tr>
            <td>口座番号</td>
            <td>12345678</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
