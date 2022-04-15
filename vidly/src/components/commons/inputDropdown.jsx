import React from "react";

const InputDropdown = ({ id, label, value, error, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select id={id} className="form-control" onChange={onChange}>
        {value.map((item) => (
          <option value={item}>{item+'q'}</option>
        ))}
      </select>
      {}
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export default InputDropdown;
