import React, { Component } from "react";
import ProfInfo from "./ProfInfo";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="buttonContainer">
          <button onClick={this.props.previewMode} className="previewBtn">
            Preview Mode
          </button>
          <span>or</span>
          <button
            onClick={this.props.workingMode}
            className="workingBtn active"
          >
            Working Mode
          </button>
        </div>
        <div className="cvForm">
          <ProfInfo />
          <Profile />
          <Education />
          <Experience />
          <Skills />
        </div>
      </>
    );
  }
}
