import React from "react";

const Radio = ({ label, name, value, currentValue, setCurrentValue }) => {
  const selected =
    currentValue === parseInt(value)
      ? `border-white bg-sugarplum-sp_pink text-white`
      : `bg-pink-100 border-pink-300`;

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
