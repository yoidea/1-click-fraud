import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import cover from './cover.jpg';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
      <Grid container justify="center">
        <Card style={{
          maxWidth: 700
        }}>
          <CardMedia
            image={cover}
            style={{height: 200}}
          />
          <CardContent>
            <h1>
              儲ける方法
            </h1>
            <p>
              何もせずに月300万円稼ぐ方法があります。
              そんな夢のような方法を教えます。
              あなたも億万長者になりましょう。
            </p>
          </CardContent>
          <CardActions>
            <Link to="/done">
              <Button size="large" color="primary">
                もっと詳しく
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

class Done extends Component {
  render() {
    return (
      <Grid container justify="center">
        <div style={{
          maxWidth: 700
        }}>
          <h1>登録完了</h1>
          <p>
            お客様の会員登録が正常に完了しました。
            3日以内に<strong>98,000円</strong>お支払い下さい。
            お支払いが確認できない場合は<strong>法的処置</strong>
            をとらせていただきますのでご注意下さい。
          </p>
          <h2>お問合せ</h2>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>電話番号</TableCell>
                  <TableCell>0120-999-999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>メールアドレス</TableCell>
                  <TableCell>noreply@example.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <h2>お振込先</h2>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>銀行名(銀行コード)</TableCell>
                  <TableCell>極道銀行(5901)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>支店名(支店コード)</TableCell>
                  <TableCell>八草支店(893)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>種別</TableCell>
                  <TableCell>普通預金</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>口座番号</TableCell>
                  <TableCell>12345678</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </Grid>
    );
  }
}

export default App;
