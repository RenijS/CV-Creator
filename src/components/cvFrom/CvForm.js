import React, { Component } from "react";
import ProfInfo from "./ProfInfo";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default class extends Component {
  render() {
    return (
      <div className="cvForm">
        <ProfInfo />
        <Profile />
        <Education />
        <Experience />
        <Skills />
      </div>
    );
  }
}
