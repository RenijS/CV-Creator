import React, { Component } from "react";

export default class education extends Component {
  constructor() {
    super();

    this.state = { education: [], edit: false };
  }

  handleEduEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { education, edit } = this.state;
    return (
      <div>
        <h2>education</h2>
        <hr />
        <button onClick={this.handleEduEdit}>+ education</button>
        {edit && (
          <form id="edu-edit" className="edit-form">
            <div>
              <label htmlFor="school">School:</label>
              <input type="text" id="school" required />
            </div>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input type="text" id="degree" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" />
            </div>
            <div>
              <label htmlFor="end">End Date:</label>
              <input type="Date" id="end" />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <br />
              <textarea name="desc" id="desc" cols="50" rows="5"></textarea>
            </div>
            <div>
              <button type="submit">Add</button>
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
