import React from "react";
import "./Loader.css";

function Loader() {
    return (
        <div id="loader">
            <img src={process.env.PUBLIC_URL + "/loader.svg"} alt="loader" />
        </div>
    );
}

export default Loader;
