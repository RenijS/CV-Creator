import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Copyright @ 2022 RenijS</p>
        <a href="https://github.com/RenijS">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}
