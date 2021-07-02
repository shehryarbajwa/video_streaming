import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }


  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  renderCategory = ({ input, label, categories, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select {...input} autoComplete="off">
          <option value="">Select</option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    const product_categories = ["Eggs", "Kinoo", "Maize"];
    const provinces = ["Punjab", "Sindh", "KPK", "Balochistan"];

    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <h4 className="ui dividing header">Eager to work with us?</h4>
        <Field name="name" component={this.renderInput} label="Name" />
        <Field
          name="contact"
          component={this.renderInput}
          label="Contact Number"
        />
        <Field name="address" component={this.renderInput} label="Address" />
        <Field
          name="product"
          component={this.renderCategory}
          label="Product"
          categories={product_categories}
        />
        <Field
          name="province"
          component={this.renderCategory}
          label="Province"
          categories={provinces}
        />

        <Field name="district" component={this.renderInput} label="District" />
        <div className="two fields">
          <Field name="zipcode" component={this.renderInput} label="Zipcode" />
          <Field name="country" component={this.renderInput} label="Country" />
        </div>
        <button className="fluid ui positive button">Send a message</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }

  if (!formValues.contact) {
    errors.contact = 'You must enter a contact';
  }

  if (!formValues.product) {
    errors.product = 'You must enter a product';
  }

  if (!formValues.address) {
    errors.address = 'You must enter an address';
  }

  if (!formValues.province) {
    errors.province = 'You must enter a province';
  }

  if (!formValues.country) {
    errors.country = 'You must enter a country';
  }

  return errors;
};

export default reduxForm({
  form: "vendor",
  validate
})(StreamCreate);
