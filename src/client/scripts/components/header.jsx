"use strict";

var React = require("react");
var Router = require("react-router");
var classNames = require("classnames");

var Link = Router.Link;

var Header = React.createClass({
    propTypes: {
        closeMenu: React.PropTypes.func.isRequired,
        onNavigate: React.PropTypes.func.isRequired,
        onToggleMenu: React.PropTypes.func.isRequired,
        showExpandedMenu: React.PropTypes.bool.isRequired
    },

    render: function() {
        var classes = classNames({
            "show-menu": this.props.showExpandedMenu
        });

        return (
            <header>
                <hgroup>
                    <h1 className="logo"><Link onClick={this.props.onNavigate} to="/">Sample Device Survey</Link></h1>
                    <a className="nav-toggle" href="#menu" onClick={this.props.onToggleMenu} >&#9776;</a>
                </hgroup>
                <nav className={classes}>
                    <ul>
                        <li><Link onClick={this.props.onNavigate} to="results">Results</Link></li>
                        <li><Link onClick={this.props.onNavigate} to="questions">Questions</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
});

module.exports = Header;
