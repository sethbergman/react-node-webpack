"use strict";

var express = require("express");
var favicon = require('serve-favicon');
var handlebars = require("express-handlebars");
var path = require("path");
var data = require("./models/data.js");

var server = express();

var FILE_NOT_FOUND = 404;
var PORT = process.env.PORT || 3000;

// Handlebars config
var viewsPath = path.join(__dirname, "views");
var hbs = handlebars.create({
    defaultLayout: "main",
    layoutsDir: path.join(viewsPath, "layouts"),
    partialsDir: path.join(viewsPath, "partials")
});

// Server config
server.engine("handlebars", hbs.engine);
server.set("view engine", "handlebars");
server.set("views", viewsPath);
server.set("port", PORT);

// Routes
server.use(favicon(path.join(__dirname, "..", "build", "favicon.ico")));
server.use("/", express.static(path.join(__dirname, "..", "build")));
server.get(["/", "/results$", "/questions$", "/about$"], function (req, res) {
    res.render("home", {
        data: JSON.stringify(data.values)
    });
});

// 404 handler
server.use(function(req, res, next) {
    var err = new Error("The site configured at this address does not contain the requested file");
    err.status = FILE_NOT_FOUND;
    next(err);
});

// Error handler
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        title: err.status == FILE_NOT_FOUND ? "File Not Found" : "Internal Server Error",
        message: err.message,
        status: err.status
    });
});

// Start server listening
server.listen(PORT, function() {
    console.log("Express server listening on port " + PORT);
});
