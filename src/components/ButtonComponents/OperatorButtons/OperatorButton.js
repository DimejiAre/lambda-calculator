import React from "react";

const OperatorButton = (props) => {
  const [value, click] = props;
  return (
    <button onClick={() => click}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {value}
    </button>
  );
};

export default OperatorButton;
