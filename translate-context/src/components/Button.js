import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <div className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Voorlagan")}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
export default Button;
