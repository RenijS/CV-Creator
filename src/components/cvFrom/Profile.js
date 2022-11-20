import React, { Component } from "react";

export default class profile extends Component {
  constructor() {
    super();

    this.state = { description: "", edit: false, finalDescription: "" };
  }

  handleProfEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleDescChange = (e) => {
    this.setState(() => ({ description: e.target.value }));
    console.log(e.target.value);
  };

  handleProfSave = () => {
    this.setState((prevState) => ({
      finalDescription: prevState.description,
    }));

    this.handleProfEdit();
  };

  render() {
    const { description, edit, finalDescription } = this.state;
    return (
      <div>
        <h2>profile</h2>
        <hr />
        <span>{finalDescription}</span>
        <button onClick={this.handleProfEdit} className="plusBtn">
          + Profile
        </button>
        {edit && (
          <div>
            <div>
              <label htmlFor="desc">Description</label>
              <br />
              <textarea
                name="desc"
                id="desc"
                cols="50"
                rows="5"
                onChange={this.handleDescChange}
              >
                {description}
              </textarea>
            </div>
            <button type="button" onClick={this.handleProfSave}>
              Add
            </button>
            <button type="button" onClick={this.handleProfEdit}>
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
}
