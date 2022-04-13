import React from "react";

const Input = ({ id, type, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div> }
    </div>
  );
};

export default Input;
