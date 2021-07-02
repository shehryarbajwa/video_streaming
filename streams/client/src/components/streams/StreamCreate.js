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

  renderCategory({ input, label, categories }) {
    return (
      <div className="field">
        <label>{label}</label>
        <select {...input}>
        <option value="">Select</option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    const product_categories = ["Eggs", "Kinoo", "Maize"];
    const provinces = ["Punjab", "Sindh", "KPK", "Balochistan"];

    return (
      <form
        className="ui form"
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

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
