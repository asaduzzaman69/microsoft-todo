import React from "react";
import "./form-input.styles.css";

const FormInput = ({ handleChange,handlePress, label, isAddInput, ...otherProps }) => {
   
  return (
    <>
      <div
        className={`${
          isAddInput ? "addInput" : "wrap-input100 validate-input"
        }`}
        data-validate="Name is required"
      >
        {label ? <span className="label-input100">{label}</span> : null}

        <input className="input100" onChange={handleChange} onKeyPress={handlePress} {...otherProps} />
        <span className="focus-input100"></span>
      </div>
    </>
  );
};

export default FormInput;
