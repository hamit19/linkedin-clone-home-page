import React from "react";
import "./Input.css";

const Input = ({ placeholder, onChange, name, type }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
