import React from "react";
import "./InvoiceForm.css";
export default class InvoiceForm extends React.Component {
  nameRef = React.createRef();
  issuedDateRef = React.createRef();
  repaymentDateRef = React.createRef();
  amountRef = React.createRef();

  saveAndPrev = () => {
    let data = {
      invoice_name: this.nameRef.current.value,
      issued_date: this.issuedDateRef.current.value,
      replayment_date: this.repaymentDateRef.current.value,
      invoice_amount: this.amountRef.current.value
    };
    this.props.filledFormTwo();
    this.props.saveValues(data);
    this.props.previousStep();
  };

  render() {
    let now = new Date();
    let maxDate = now.toISOString().substring(0, 10);
    return (
      <div>
        <div className="form-heading">CREATE AN INVOICE</div>

        <div className="forminput-wrapper">
          <label>Invoice Name</label>
          <input
            type="text"
            ref={this.nameRef}
            defaultValue={this.props.fieldValues.invoice_name}
            required
          />
        </div>
        <div className="forminput-wrapper">
          <label>Issued Date</label>
          <input
            type="date"
            ref={this.issuedDateRef}
            defaultValue={this.props.fieldValues.issued_date}
            max={maxDate}
            required
          />
        </div>
        <div className="forminput-wrapper">
          <label>Repayment Date</label>
          <input
            type="date"
            ref={this.repaymentDateRef}
            defaultValue={this.props.fieldValues.repayment_date}
            min={maxDate}
            required
          />
        </div>
        <div className="forminput-wrapper">
          <label>Amount</label>
          <input
            type="text"
            ref={this.amountRef}
            defaultValue={this.props.fieldValues.invoice_amount}
            required
          />
        </div>
        <div className="forminput-wrapper">
          <button onClick={this.saveAndPrev}>Previous</button>
          <button onClick={this.props.nextStep}>Submit</button>
        </div>
      </div>
    );
  }
}
