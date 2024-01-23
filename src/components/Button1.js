import React from "react";

const Button1 = ({ text, customClass, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className={`bg-secondary-500 text-primary-100 font-bold border rounded-3xl border-primary-50 hover:bg-secondary-50 hover:text-primary-800 hover:border-secondary-400 transition-all ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button1;
