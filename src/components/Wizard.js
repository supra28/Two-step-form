import React from "react";
import InvoiceForm from "./InvoiceForm";
import DealForm from "./DealForm";
import "./Wizard.css";
let formValues = {
  name: "",
  date: "",
  amount: "",
  invoice_name: "",
  issued_date: "",
  repayment_date: "",
  invoice_amount: ""
};
export default class Wizard extends React.Component {
  state = { step: 1 };
  formRef = React.createRef();
  filledTwo = false;
  validate = () => {
    const formEl = this.formRef.current;
    const formLength = formEl.length;

    if (formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        console.log(elem);
        const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = "";
          }
        }
      }
      return false;
    } else {
      //The form is valid, so we clear all the error messages
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorLabel = elem.parentNode.querySelector(".invalid-feedback");
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          errorLabel.textContent = "";
        }
      }
      return true;
    }
  };
  filledFormTwo = () => {
    this.filledTwo = true;
  };
  saveValues = values => {
    formValues = Object.assign({}, formValues, values);
  };
  nextStep = () => {
    if (this.validate()) this.setState({ step: this.state.step + 1 });
  };

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  showStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <DealForm
            fieldValues={formValues}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            formRef={this.formRef}
            showFormTwoValues={this.filledTwo}
          />
        );
      case 2:
        return (
          <InvoiceForm
            fieldValues={formValues}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            formRef={this.formRef}
            filledFormTwo={this.filledFormTwo}
          />
        );
    }
  };

  render() {
    return (
      <div className="wizard">
        {this.state.step == 1 && (
          <div className="form-heading-wrapper">
            <div>Step 1</div>
          </div>
        )}
        {this.state.step == 2 && (
          <div className="form-heading-wrapper">
            <div>Step 2</div>
          </div>
        )}
        <div className="wrapper">
          <div className="wizard-step-wrapper">
            <form ref={this.formRef}>{this.showStep()}</form>
          </div>
          {this.state.step === 1 &&
            this.filledTwo && (
              <div className="wizard-step-wrapper">
                <div>
                  <div className="form-heading">VALUE IN INVOICE FORM</div>
                  <span className="val-label">Invoice Name</span>
                  <span>
                    {formValues.invoice_name
                      ? formValues.invoice_name
                      : "No Data"}
                  </span>
                  <span className="val-label"> Issued Date</span>
                  <span>
                    {formValues.issued_date
                      ? formValues.issued_date
                      : "No Data"}
                  </span>
                  <span className="val-label">Repayment Date</span>
                  <span>
                    {formValues.repayment_date
                      ? formValues.repayment_date
                      : "No Data"}
                  </span>
                  <span className="val-label">Invoice Amount</span>
                  <span>
                    {formValues.invoice_amount
                      ? formValues.invoice_amount
                      : "No Data"}
                  </span>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}
