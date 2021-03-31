import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ onChange, text, ...checkboxProps }) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = (e) => {
    setIsChecked(!isChecked);
    // onChange && onChange(isChecked && props.value);
    onChange && onChange(e);
  };

  return (
    <div className="Span">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={changeHandler}
        {...checkboxProps}
      />
      <p className="spantext">{text}</p>
    </div>
  );
};

export default Checkbox;
