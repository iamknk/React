import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
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
        <LanguageContext.Provider value={this.state.langugage}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
