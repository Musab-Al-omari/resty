import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Form from "./Form.js";
import Results from "./Results.js";
import History from "./History.js";
import Loading from "./Loading";
import HistoryPage from "./HistoryPage";
import HelpPage from "./HelpPage";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {},
      headersObj: {},
      count: 0,
      history: JSON.parse(localStorage.getItem("myHeader")),
      method: "GET",
      url: "https://api-server-0.herokuapp.com/food/",
      loading: false,
    };
  }

  handlerApi = (body, count, headersObj, status) => {
    if (status < 299 && this.state.history) {
      this.setState({
        body,
        count,
        headersObj,
        history: [
          ...this.state.history,
          { method: this.state.method, urlField: this.state.url, body,headersObj },
        ],
      });
    } 
    else if (status < 299 && !this.state.history) {
      this.setState({
        body,
        count,
        headersObj,
        history: [
          { method: this.state.method, urlField: this.state.url ,body,headersObj},
        ],
      });
    }
     else {
      this.setState({ body, count, headersObj });
    }
  };
  fillForm = (method, url) => {
    this.setState({ method, url });
  };
  changeUrl = (url) => {
    this.setState({ url });
  };
  methodHandler = (method) => {
    this.setState({ method });
  };
  loadingHandler = (loading) => {
    this.setState({ ...this.state, loading });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* {the home page } */}
          <Route exact path="/resty">
            <Header />
            <Form
              handler={this.handlerApi}
              method={this.state.method}
              url={this.state.url}
              changeUrl={this.changeUrl}
              methodHandler={this.methodHandler}
              loadingHandler={this.loadingHandler}
            />
            <Results body={this.state.body} header={this.state.headersObj} />
            <History history={this.state.history} fillForm={this.fillForm} />
            <Loading loading={this.state.loading} />
            <Footer />
          </Route>

          {/* {the history  page } */}
          <Route exact path="/resty/history">
            <Header />
            <HistoryPage history={this.state.history} />
            <Footer />
          </Route>

          {/* {the about us  page } */}
          <Route exact path="/resty/about-us">
            <Header />
            <HelpPage />
            <Footer />
          </Route>
          {/* {the 404 page } */}
          <Route path="*">404</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
