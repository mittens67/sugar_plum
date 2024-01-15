import React from "react";

const Button1 = ({ text, customClass, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className={`bg-sugarplum-sp_pink text-white font-bold border rounded-3xl border-white hover:bg-white hover:text-sp_pink hover:border-pink-400 transition-all ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button1;
