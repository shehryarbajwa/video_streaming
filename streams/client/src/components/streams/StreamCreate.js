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

  renderProduct({ input, label, categories }) {
    return (
      <div>
        <h4>{label}</h4>
        <select>
          {categories.map((category, index) => (
            <option value={index}>{category}</option>
          ))}
          <input {...input} />
        </select>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const product_categories = ["Eggs", "Kinoo", "Maize"];
    const provinces = ["Punjab", "Sindh", "KPK", "Balochistan"];

    return (
      <form className="ui form">
        <h4 class="ui dividing header">Eager to work with us?</h4>
        <Field name="name" component={this.renderInput} label="Name" />
        <Field
          name="contact"
          component={this.renderInput}
          label="Contact Number"
        />
        <Field name="address" component={this.renderInput} label="Address" />
          <Field
            name="products"
            component={this.renderProduct}
            label="Product"
            categories={product_categories}
          />
        <Field
          name="town"
          component={this.renderProduct}
          label="Province"
          categories={provinces}
        />

        <Field name="district" component={this.renderInput} label="District" />
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
