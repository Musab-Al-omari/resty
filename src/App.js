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
      count: 0,
      history: JSON.parse(localStorage.getItem('myHeader')),
      method:'GET',
      url:'https://api-server-0.herokuapp.com/food/'


    }
  }
  handlerApi = (body, count,headersObj,status) => {
   if (status<299) {
     this.setState({body,count,headersObj,history:[...this.state.history,{method:this.state.method,urlField:this.state.url}]})
   }else{
    this.setState({body,count,headersObj})
   }
  }
  fillForm=(method, url)=>{
    this.setState({method,url})

  }
  changeUrl=(url)=>{
    this.setState({url})
  }
  methodHandler=(method)=>{
    this.setState({method})
  }





  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handlerApi} method={this.state.method} url={this.state.url} changeUrl={this.changeUrl} methodHandler={this.methodHandler} />
        <Results body={this.state.body} header={this.state.headersObj}/>
        <History history={this.state.history} fillForm={this.fillForm}/>
        <Footer />
      </React.Fragment >);
  }
}
export default App;