import React from "react";
import "./History.scss";



class History extends React.Component {
  handlerClick = (method, url) => {
    this.props.fillForm(method, url);
  };



  renderHistory = (history) => {

    
    if (!history) return;

    

    return history.map((element, index) => {



      console.log('saddddddddsa',element, index);

      return (
        <p
          className="clickOn"
          key={index}
          onClick={() => this.handlerClick(element.method, element.urlField)}
        >
          {element.method} : {element.urlField}
        </p>
      );
    });
  };

  render() {
    return (
      <div className="historyContainer">
        <p className="historyLabel">History</p>
        {this.renderHistory(this.props.history)}
      </div>
    );
  }
}

export default History;
