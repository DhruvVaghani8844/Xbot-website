import React, { useState } from "react";
import "./FormSection.css";
import axios from "axios";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('https://form-early-access.vercel.app/api/user/create-user', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="Form-section">
      <div className="xbot-container">
        <section className="get-in-touch">
          <h1 className="title">Join the Early Access list</h1>
          <form className="contact-form f-row" onSubmit={handleSubmit}>
            <div className="form-field col x-50">
              <input
                id="name"
                name="name"
                className="input-text js-input"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                name="email"
                className="input-text js-input"
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field col x-100">
              <input
                id="business"
                name="business"
                className="input-text js-input"
                type="text"
                placeholder="Business"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </div>
            <button className="form-button site-button d-sm-flex">
              Join Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormSection;
