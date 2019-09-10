import React from "react";

const NumberButton = (props) => {
  const { digit, pressNumber } = props;
  return (
    <button onClick={event => pressNumber}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {digit}
    </button>
  );
};
