import React, { Component } from "react";

export default class experience extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      location: "",
      position: "",
      start: "",
      end: "",
      desc: "",
      experiences: [],
      edit: false,
    };
  }

  handleExpEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleCompanyChange = (e) => {
    this.setState(() => ({
      company: e.target.value,
    }));
  };

  handleLocationChange = (e) => {
    this.setState(() => ({
      location: e.target.value,
    }));
  };

  handlePositionChange = (e) => {
    this.setState(() => ({
      position: e.target.value,
    }));
  };

  handleStartChange = (e) => {
    this.setState(() => ({
      start: e.target.value,
    }));
  };

  handleEndChange = (e) => {
    this.setState(() => ({
      end: e.target.value,
    }));
  };

  handleDescChange = (e) => {
    this.setState(() => ({
      desc: e.target.value,
    }));
  };

  handleExpSubmit = () => {
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences,
        {
          company: this.state.company,
          location: this.state.location,
          position: this.state.position,
          start: this.state.start,
          end: this.state.end,
          desc: this.state.desc,
        },
      ],
      company: "",
      location: "",
      position: "",
      start: "",
      end: "",
      desc: "",
    }));
  };

  render() {
    const { company, location, position, start, end, desc, experiences, edit } =
      this.state;
    return (
      <div>
        <h2>exprience</h2>
        <hr />
        {!edit && (
          <div>
            <button onClick={this.handleExpEdit} className="plusBtn">
              + experience
            </button>
            {experiences.length === 0 && (
              <section>
                <div className="first row">
                  <span className="leftSide">Company</span>
                  <span className="rightSide">Location</span>
                </div>
                <div className="second row">
                  <span className="leftSide">Position</span>
                  <span className="rightSide">Start - End</span>
                </div>
                <div className="third row">
                  <span>desc</span>
                </div>
              </section>
            )}
            {experiences.length > 0 &&
              experiences.map((exp) => {
                return (
                  <section>
                    <div className="first row">
                      <span className="leftSide">{exp.company}</span>
                      <span className="rightSide">{exp.location}</span>
                    </div>
                    <div className="second row">
                      <span className="leftSide">{exp.position}</span>
                      <span className="rightSide">
                        {exp.start} - {exp.end}
                      </span>
                    </div>
                    <div className="third row">
                      <span>{exp.desc}</span>
                    </div>
                  </section>
                );
              })}
          </div>
        )}

        {edit && (
          <form id="exp-edit" className="edit-form">
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                onChange={this.handleCompanyChange}
                value={company}
                required
              />
            </div>
            <div>
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                id="position"
                onChange={this.handlePositionChange}
                value={position}
              />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                onChange={this.handleLocationChange}
                value={location}
              />
            </div>
            <div>
              <label htmlFor="start">Start Date:</label>
              <input
                type="Month"
                id="start"
                onChange={this.handleStartChange}
                value={start}
              />
            </div>
            <div>
              <label htmlFor="end">End Date:</label>
              <input
                type="Month"
                id="end"
                onChange={this.handleEndChange}
                value={end}
              />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <br />
              <textarea
                name="desc"
                id="desc"
                cols="50"
                rows="5"
                onChange={this.handleDescChange}
                value={desc}
              ></textarea>
            </div>
            <div className="buttonContainer">
              <button type="button" onClick={this.handleExpSubmit}>
                Add
              </button>
              <button type="button" onClick={this.handleExpEdit}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
