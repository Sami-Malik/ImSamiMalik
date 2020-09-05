import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loader from "./Loader";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Loader />, document.getElementById("loader_container"));
