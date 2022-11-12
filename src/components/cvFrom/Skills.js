import React, { Component } from "react";

export default class skills extends Component {
  constructor() {
    super();

    this.state = { skills: [], edit: false };
  }

  handleSkillEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
    console.log(this.state.edit);
  };

  render() {
    const { skills, edit } = this.state;
    return (
      <div>
        <h2>skills</h2>
        <hr />
        <button onClick={this.handleSkillEdit}>+ Skills</button>

        {edit && (
          <form id="skill-edit" className="edit-form">
            <div>
              <label htmlFor="skill">Skill:</label>
              <input type="text" id="skill" />
            </div>
            <button>Add</button>
          </form>
        )}
      </div>
    );
  }
}
