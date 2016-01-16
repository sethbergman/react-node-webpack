"use strict";

require("../styles/app.less");

var React = require("react");
var Router = require("react-router");
var routes = require("./components/routes");

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.body);
});
