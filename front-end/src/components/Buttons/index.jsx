import React from "react";

const Button = ({ child, classname, onClick, type }) => {
  return (
    <div className="button">
      <button onClick={onClick} className={`${classname} btn`}>
        {child}
      </button>
    </div>
  );
};

export default Button;
