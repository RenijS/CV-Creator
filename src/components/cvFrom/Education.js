import React, { Component } from "react";

export default class education extends Component {
  constructor() {
    super();

    this.state = {
      school: "",
      degree: "",
      location: "",
      endDate: "",
      desc: "",
      education: [],
      edit: false,
    };
  }

  handleEduEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleSchoolChange = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };

  handleEduSubmit = (e) => {
    this.setState({
      education: this.state.education.push({
        school: this.state.school,
        degree: this.state.degree,
        location: this.state.location,
        endDate: this.state.endDate,
        desc: this.state.desc,
      }),
      school: "",
      degree: "",
      location: "",
      endDate: "",
      desc: "",
    });
  };

  render() {
    const { school, degree, location, endDate, desc, education, edit } =
      this.state;
    return (
      <div>
        <h2>education</h2>
        <hr />
        <button onClick={this.handleEduEdit}>+ education</button>
        <section>
          <div className="first row">
            <span className="leftSide">University</span>
            <span className="rightSide">Location</span>
          </div>
          <div className="second row">
            <span className="leftSide">Degree</span>
            <span className="rightSide">End Date</span>
          </div>
          <div className="third row">
            <span>desc</span>
          </div>
        </section>
        {edit && (
          <form id="edu-edit" className="edit-form">
            <div>
              <label htmlFor="school">School:</label>
              <input
                type="text"
                id="school"
                onChange={this.handleSchoolChange}
                value={school}
                required
              />
            </div>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input
                type="text"
                id="degree"
                value={degree}
                onChange={this.handleDegreeChange}
              />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={this.handleLocationChange}
              />
            </div>
            <div>
              <label htmlFor="end">End Date:</label>
              <input
                type="Date"
                id="end"
                onChange={this.handleEndDateChange}
                value={endDate}
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
            <div>
              <button type="button" onClick={this.handleEduSubmit}>
                Add
              </button>
              <button type="button" onClick={this.handleEduEdit}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
