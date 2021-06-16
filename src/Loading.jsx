import React from "react";
import "./Loading.scss";

export default class Loading extends React.Component {
  render() {
    if (this.props.loading) {
      return <div className="loader"></div>;
    }
    return null
  }
}
