import React from "react";
import loadable from "@loadable/component";
// import Work from "./Work";
// import Footer from "./Footer";
// import Web from "./Web";
const Work = loadable(() => import("./Work"));
const Footer = loadable(() => import("./Footer"));
const Web = loadable(() => import("./Web"));

function Projects() {
    return (
        <div id="display">
            <div id="work" key="1">
                <h1>Work.</h1>
                <Work />
            </div>
            <div id="work" key="2">
                <h1>Web.</h1>
                <Web />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
