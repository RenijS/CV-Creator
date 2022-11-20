import React, { Component } from "react";
import CvForm from "./cvFrom/CvForm";

export default class main extends Component {
  constructor() {
    super();

    this.state = {
      previewMode: false,
    };

    this.workingMode = this.workingMode.bind(this);
    this.previewMode = this.previewMode.bind(this);
  }

  workingMode = () => {
    this.setState({
      previewMode: false,
    });
    for (let plusBtn of document.querySelectorAll(".plusBtn")) {
      plusBtn.classList.remove("displayGone");
    }
    document.querySelector(".previewBtn").classList.remove("active");
    document.querySelector(".workingBtn").classList.add("active");
  };

  previewMode = () => {
    this.setState({
      previewMode: true,
    });
    for (let plusBtn of document.querySelectorAll(".plusBtn")) {
      plusBtn.classList.add("displayGone");
    }
    document.querySelector(".previewBtn").classList.add("active");
    document.querySelector(".workingBtn").classList.remove("active");
  };

  render() {
    return (
      <CvForm workingMode={this.workingMode} previewMode={this.previewMode} />
    );
  }
}
