import React from "react";
import "./App.css";
// import Sidebar from "./Sidebar";
// import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Create from "./Create";
import loadable from "@loadable/component";
const Sidebar = loadable(() => import("./Sidebar"));
const Projects = loadable(() => import("./Projects"));
const Create = loadable(() => import("./Create"));

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/">
                        <Sidebar />
                        <Projects />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
