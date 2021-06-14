import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js';
import Main from './Main.js';
import Results from './Results.js';
import './App.css';

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      body:{},
      resultsArray: [],
      count: 0
    }
  }
  handlerApi = (body,resultsArray, count) => {
    this.setState({body,resultsArray,count})
  }





  render() {
    return (
      <React.Fragment>
        <Header />
        <Main handler={this.handlerApi} />
        <Results results={this.state.body}/>
        <Footer />
      </React.Fragment >);
  }
}
export default App;