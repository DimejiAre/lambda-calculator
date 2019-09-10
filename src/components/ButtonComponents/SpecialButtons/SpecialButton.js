import React from "react";

const SpecialButton = (props) => {
  const {digit, click} = props;
  return (
    <button className={"special"} onClick={() => click}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {digit}
    </button>
  );
};

export default SpecialButton;
