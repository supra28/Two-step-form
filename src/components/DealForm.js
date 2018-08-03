import React from "react";
import "./DealForm.css";
export default class DealForm extends React.Component {
  nameRef = React.createRef();
  dateRef = React.createRef();
  amountRef = React.createRef();

  saveAndNext = () => {
    let data = {
      name: this.nameRef.current.value,
      date: this.dateRef.current.value,
      amount: this.amountRef.current.value
    };
    this.props.saveValues(data);
    this.props.nextStep();
  };

  render() {
    let now = new Date();
    let maxDate = now.toISOString().substring(0, 10);
    return (
      <React.Fragment>
        <div className="form-heading">CREATE A DEAL</div>

        <div className="form-group forminput-wrapper">
          <label>Name</label>
          <input
            type="text"
            ref={this.nameRef}
            defaultValue={this.props.fieldValues.name}
            //pattern="[A-Za-z]"
            required
          />
          {/* <small className="help-text">
            Should not contain numerics and special characters
          </small> */}
          <div className="invalid-feedback" />
        </div>
        <div className="forminput-wrapper">
          <label>Date</label>
          <input
            type="date"
            ref={this.dateRef}
            defaultValue={this.props.fieldValues.date}
            max={maxDate}
            required
          />
        </div>
        <div className="invalid-feedback" />

        <div className="forminput-wrapper">
          <label>Amount</label>
          <input
            type="number"
            ref={this.amountRef}
            defaultValue={this.props.fieldValues.amount}
            required
          />
        </div>
        <div className="invalid-feedback" />

        <div className="forminput-wrapper">
          <button onClick={this.saveAndNext}>Next</button>
        </div>
      </React.Fragment>
    );
  }
}
