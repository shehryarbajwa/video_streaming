import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  renderProduct({ input, label }) {
    return (
        <div className="grouped fields">
            <h4 class="ui dividing header">Select Product</h4>
            <div className="ui radio checkbox">
          <label>{label}</label>
          <input type="radio" checked="" tabindex="0" className="hidden" {...input} />
        </div>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="ui form">
        <h4 class="ui dividing header">Eager to work with us?</h4>
        <Field name="name" component={this.renderInput} label="Name" />
        <Field
          name="contact"
          component={this.renderInput}
          label="Contact Number"
        />
        <div className="two fields">
        <Field
          name="products"
          component={this.renderInput}
          label="Products"
        />
          <Field name="address" component={this.renderInput} label="Address" />
        </div>

        <div className="two fields">
          <Field name="town" component={this.renderInput} label="Town" />
          <Field
            name="district"
            component={this.renderInput}
            label="District"
          />
        </div>
        <div className="two fields">
        <Field name="zipcode" component={this.renderInput} label="Zipcode" />
        <Field name="country" component={this.renderInput} label="Country" />
        </div>
        <button class="fluid ui button">Send a message</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
