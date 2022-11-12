import React, { Component } from "react";

export default class exprience extends Component {
  constructor() {
    super();

    this.state = { experiences: [], edit: false };
  }

  handleExpEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  render() {
    const { experiences, edit } = this.state;
    return (
      <div>
        <h2>exprience</h2>
        <hr />
        <button onClick={this.handleExpEdit}>+ experience</button>
        {edit && (
          <form id="exp-edit" className="edit-form">
            <div>
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" required />
            </div>
            <div>
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" />
            </div>
            <div>
              <label htmlFor="start">Start Date:</label>
              <input type="Date" id="start" />
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
