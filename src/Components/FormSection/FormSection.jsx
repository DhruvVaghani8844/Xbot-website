import React from "react";
import "./FormSection.css";

const FormSection = () => {
  return (
    <div className="Form-section">
      <div className="xbot-container">
        <section className="get-in-touch">
          <h1 className="title">Join the Early Access list</h1>
          <form className="contact-form f-row">
            <div className="form-field col x-50">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                placeholder="Name"
                required
              />
            
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                placeholder="E-mail"
                required
              />
             
            </div>
            <div className="form-field col x-100">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                placeholder="Bussiness"
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
