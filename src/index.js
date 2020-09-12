import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loader from "./Loader";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
} else {
    ReactDOM.render(<App />, rootElement);
}
ReactDOM.render(<Loader />, document.getElementById("loader_container"));
