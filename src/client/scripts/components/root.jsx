"use strict";

var React = require("react");
var Router = require("react-router");

var Header = require("./header");
var Footer = require("./footer");
var RouteHandler = Router.RouteHandler;

var Root = React.createClass({
    getInitialState: function() {
        return {
            showExpandedMenu: false,
            clientWidth: window.innerWidth
        };
    },

    componentDidMount: function(){
        window.addEventListener("resize", this.onResize);
    },

    componentWillUnmount: function(){
        window.removeEventListener("resize", this.onResize);
    },

    onResize: function() {
        if (this.state.clientWidth !== window.innerWidth) {
            this.setState({
                showExpandedMenu: false,
                clientWidth: window.innerWidth
            });
        }
    },

    onToggleMenu: function(e) {
        e.preventDefault();
        this.setState({
            showExpandedMenu: !this.state.showExpandedMenu
        });
    },

    onNavigate: function(e) {
        e.stopPropagation();
        this.closeMenu();
    },

    closeMenu: function() {
        if (this.state.showExpandedMenu) {
            this.setState({
                showExpandedMenu: false
            });
        }
    },

    render: function() {
        var props = {
            closeMenu: this.closeMenu,
            data: window.appData,
            onNavigate: this.onNavigate,
            onToggleMenu: this.onToggleMenu,
            showExpandedMenu: this.state.showExpandedMenu
        };

        return (
            <div id="surveyApp">
                <Header {...props} />
                <main>
                    <RouteHandler {...props} />
                </main>
                <footer>
                    <Footer {...props} />
                </footer>
            </div>
        );
    }
});

module.exports = Root;
