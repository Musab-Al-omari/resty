import React from 'react';
import './History.scss'


class History extends React.Component {
  constructor(props){
    super(props)
    this.state={
      history: JSON.parse(window.localStorage.getItem('myHeader'))
    }
  }
  renderHistory = () => {
    if (!this.state.history) return null;

    return this.state.history.map((element, index) => {
      return (
        <p key={index}>
          {element.method} : {element.urlField}
        </p>
      );
    });
  };

    render() {
      return (
        <div className="historyContainer">
          <p className="historyLabel">History</p>
          {this.renderHistory}
        </div>
      );
    }
}

export default History;