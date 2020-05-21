import { useState, useEffect } from "react";

export default () => {
  const [latitudeh, setLatitudeh] = useState(null);
  const [errorMessageh, setErrorMessageh] = useState("");
  const [locationAcessMessageh, setLocationAccessMessageh] = useState(
    "Please Accept Location Access"
  );
  useEffect(() => {
    (() => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAccessMessageh("Checking Your Location");
          setLatitudeh(position.coords.latitude);
        },
        (err) => {
          setErrorMessageh(err.message);
        }
      );
    })();
  }, []);

  return [latitudeh, errorMessageh, locationAcessMessageh];
};
