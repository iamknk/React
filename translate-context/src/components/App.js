import React from "react";
import UserCreate from "./UserCreate";
class App extends React.Component {
  state = { langugage: "english" };
  onLanguageChange = (langugage) => {
    this.setState({ langugage });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a langugage:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
