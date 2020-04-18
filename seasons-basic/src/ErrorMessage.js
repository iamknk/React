import "./ErrorMessage.css";
import React from "react";

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <div className="ui message">
        <div className="header">Error!!!</div>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
