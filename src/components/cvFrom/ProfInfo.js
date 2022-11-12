import React, { Component } from "react";

export default class profInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      linkedIn: "",
      phone: "",
      email: "",
      finalName: "",
      finalAddress: "",
      finalLinkedin: "",
      finalPhone: "",
      finalEmail: "",
      edit: false,
    };
  }

  handleInfoEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleNameChange = (e) => {
    this.setState(() => ({
      name: e.target.value,
    }));
  };

  handleAddressChange = (e) => {
    this.setState(() => ({
      address: e.target.value,
    }));
  };

  handleLinkedinChange = (e) => {
    this.setState(() => ({
      linkedIn: e.target.value,
    }));
  };

  handlePhoneChange = (e) => {
    this.setState(() => ({
      phone: e.target.value,
    }));
  };

  handleEmailChange = (e) => {
    this.setState(() => ({
      email: e.target.value,
    }));
  };

  handleInfoSubmit = () => {
    this.setState((prevState) => ({
      finalName: prevState.name,
      finalAddress: prevState.address,
      finalLinkedin: prevState.linkedIn,
      finalPhone: prevState.phone,
      finalEmail: prevState.email,
    }));
    this.handleInfoEdit();
  };

  render() {
    const {
      name,
      address,
      linkedIn,
      phone,
      email,
      finalName,
      finalAddress,
      finalLinkedin,
      finalPhone,
      finalEmail,
      edit,
    } = this.state;
    return (
      <div>
        {!edit && (
          <div>
            <h1>
              {finalName.length === 0 && "Name"}
              {finalName.length > 0 && finalName}
            </h1>
            <div className="rowContainer">
              <span id="address">
                {finalAddress.length === 0 && "address"}
                {finalAddress.length > 0 && finalAddress}
              </span>
              <div className="verticalLine"></div>
              <span>
                {finalLinkedin.length > 0 && <a href="/">{finalLinkedin}</a>}
              </span>
              {finalLinkedin.length > 0 && <div className="verticalLine"></div>}
              <span id="phone">
                {finalPhone.length === 0 && "phone"}
                {finalPhone.length > 0 && finalPhone}
              </span>
              <div className="verticalLine"></div>
              <span id="email">
                {finalEmail.length === 0 && "email"}
                {finalEmail.length > 0 && finalEmail}
              </span>
            </div>
            <button onClick={this.handleInfoEdit}>+ Info</button>
          </div>
        )}

        {edit && (
          <form id="info-edit" className="edit-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={this.handleAddressChange}
              />
            </div>
            <div>
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="text"
                id="linkedin"
                value={linkedIn}
                onChange={this.handleLinkedinChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={this.handlePhoneChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <button type="button" onClick={this.handleInfoSubmit}>
                Save
              </button>
              <button type="button" onClick={this.handleInfoEdit}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
