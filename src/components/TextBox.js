import React from "react";

const TextBox = ({ title, placeholder, rows, cols, containerClass, textAreaClass, maxLength, message, changeMessage }) => {
  return (
    <div className={`${containerClass}`}>
      {title && <h2 className="font-semibold text-sm md:text-base">{title}:</h2>}
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className={`my-[10px] w-[90%] px-[5px] placeholder-secondary-100 resize-none  ${textAreaClass}`}
        maxLength={maxLength}
        value={message}
        onChange={e => changeMessage(e.target.value)}
      ></textarea>
    </div>
  );
};

TextBox.defaultProps = {
  title: "",
  placeholder: "",
  rows: "4",
  cols: "35",
  containerClass: "",
  textAreaClass: "",
  maxLength: "200"
};

export default TextBox;
