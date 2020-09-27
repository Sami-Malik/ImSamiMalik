import React from "react";

import { Display, WorkDiv } from "./AppStyles";

import loadable from "@loadable/component";
// import Work from "./Work";
// import Footer from "./Footer";
// import Web from "./Web";
const Work = loadable(() => import("./Work"));
const Footer = loadable(() => import("./Footer"));
const Web = loadable(() => import("./Web"));

function Projects() {
    return (
        <Display>
            <WorkDiv key="1">
                <h1>Work.</h1>
                <Work />
            </WorkDiv>
            <WorkDiv key="2">
                <h1>Web.</h1>
                <Web />
            </WorkDiv>
            <Footer />
        </Display>
    );
}

export default Projects;
