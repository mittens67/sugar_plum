import React from "react";

const Radio = ({ label, name, value, currentValue, setCurrentValue }) => {
  const selected =
    currentValue === parseInt(value)
      ? `border-accent-500 bg-secondary-500 text-text-50`
      : `bg-secondary-50 border-accent-300 text-text-800`;

  return (
    <label className={` border rounded py-[5px] px-[10px] ${selected}`}>
      {label}
      <input
        name={name}
        type="radio"
        value={value}
        className="hidden"
        checked={currentValue === parseInt(value)}
        onChange={(e) => setCurrentValue(parseInt(e.target.value))}
      />
    </label>
  );
};

export default Radio;
