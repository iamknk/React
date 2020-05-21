import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import useLocation from "./useLocation";

const App = () => {
  const [latitudeh, errorMessageh, locationAcessMessageh] = useLocation();
  if (latitudeh && !errorMessageh) {
    return <SeasonDisplay latitude={latitudeh} />;
  }
  if (!latitudeh && errorMessageh) {
    return <ErrorMessage errorMessage={errorMessageh} />;
  }

  return <Spinner message={locationAcessMessageh} />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
