import React, { Component } from "react";

export default class skills extends Component {
  constructor() {
    super();

    this.state = { skill: "", skills: [], edit: false };
  }

  handleSkillEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleSkillChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  handleSkillSubmit = (e) => {
    console.log(this.state.skills);
    this.setState({
      skills: [...this.state.skills, this.state.skill],
      skill: "",
    });
  };

  render() {
    const { skill, skills, edit } = this.state;
    return (
      <div>
        <h2>skills</h2>
        <hr />
        <button onClick={this.handleSkillEdit} className="plusBtn">
          + Skills
        </button>
        <div>
          {skills.length > 0 &&
            skills.map((skl) => {
              return <span>{skl}</span>;
            })}
        </div>
        {edit && (
          <form id="skill-edit" className="edit-form">
            <div>
              <label htmlFor="skill">Skill:</label>
              <input
                type="text"
                id="skill"
                onChange={this.handleSkillChange}
                value={skill}
              />
            </div>
            <div className="buttonContainer">
              <button onClick={this.handleSkillSubmit} type="button">
                Add
              </button>
              <button onClick={this.handleSkillEdit} type="button">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
