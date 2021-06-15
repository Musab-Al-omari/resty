import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js';
import Form from './Form.js';
import Results from './Results.js';
import History from './History.js';
import './App.css';

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      body:{},
      headersObj:{},
      count: 0
    }
  }
  handlerApi = (body, count,headersObj) => {
   
    this.setState({body,count,headersObj})
  }





  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handlerApi} />
        <Results body={this.state.body} header={this.state.headersObj}/>
        <History />
        <Footer />
      </React.Fragment >);
  }
}
export default App;