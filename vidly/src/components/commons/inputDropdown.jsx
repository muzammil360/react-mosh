import React from "react";

const getEmptyOptionJsx = (currentOptionId, options) => {
  return currentOptionId ? null : <option key="" value=""></option>;
};

const InputDropdown = ({ id, label, value, options, error, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        className="form-control"
        onChange={onChange}
        value={value}
      >
        {getEmptyOptionJsx(value, options)}
        {options.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {}
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export default InputDropdown;
