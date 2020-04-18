import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: "",
    locationAcessMessage: "Please Accept Location Access",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ locationAcessMessage: "CHecking Your Location" });
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  renderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <ErrorMessage errorMessage={this.state.errorMessage} />;
    }
    return <Spinner message={this.state.locationAcessMessage} />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
