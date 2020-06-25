import React, { Component } from "react";

import "./Loading.css";

import Loading_Image from "./Loading.svg";

class Loading extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={this.props.show ? { display: "flex" } : { display: "none" }}
        className="loading_main"
      >
        <img src={Loading_Image} alt="" />
      </div>
    );
  }
}

export default Loading;
