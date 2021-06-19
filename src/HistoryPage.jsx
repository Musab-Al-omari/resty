import React, { Component } from "react";
import ReactJson from "react-json-view";

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      header:{},
      body:{}
    };
  }
  renderHistory = (history) => {
    if (!history) return;

    return history.map((element, index) => {
      return (
        <p
          className="clickOn"
          key={index}
          onClick={() => this.handlerClick(element.headerObj, element.body,index)}
        >
          {element.method} : {element.urlField}
        </p>
      );
    });
  };

  handlerClick=(header,body)=>{

    this.setState({header,body})

  }




  render() {
    // let myObject = this.props.body;
    // let myHeaderObject = this.props.header;
    return (
      <div>
        <div>
          <div className="historyContainer">
            <p className="historyLabel">History</p>
            {this.renderHistory(this.props.history)}
          </div>
        </div>

        <div>
          <h1>Results</h1>
          <div id="outerDiv">
            <div id="outPut">
              <ReactJson name="header" src={this.state.header} />
              <ReactJson name="response" src={this.state.body} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
