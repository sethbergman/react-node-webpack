"use strict";

var React = require("react");
var Router = require("react-router");

var Root = require("./root");
var Home = require("./home");
var Results = require("./results");
var Questions = require("./questions");
var About = require("./about");

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route handler={Root} path="/">
        <DefaultRoute handler={Home} />
        <Route handler={Results} name="results" />
        <Route handler={Questions} name="questions" />
        <Route handler={About} name="about" />
    </Route>
);

module.exports = routes;
