import React, { Component } from "react";
import ProfInfo from "./ProfInfo";
import Profile from "./Profile";
import Education from "./Education";
import Exprience from "./Exprience";
import Skills from "./Skills";

export default class extends Component {
  render() {
    return (
      <div className="cvForm">
        <ProfInfo />
        <Profile />
        <Education />
        <Exprience />
        <Skills />
      </div>
    );
  }
}
