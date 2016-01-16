"use strict";

var React = require("react");
var Router = require("react-router");

var Link = Router.Link;

var Home = React.createClass({
    propTypes: {
        onNavigate: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <section className="home">
                <div className="intro">
                    <h2>The device survey shows how people access the internet</h2>
                </div>
                <div className="row content">
                    <div className="column column-width-6">
                        <h3><Link onClick={this.props.onNavigate} to="results">Results</Link></h3>
                        <Link className="navigation-image results-image" onClick={this.props.onNavigate} to="results" />
                        <p>See results from all participants in the survey</p>
                    </div>
                    <div className="column column-width-6">
                        <h3><Link onClick={this.props.onNavigate} to="questions">Questions</Link></h3>
                        <Link className="navigation-image questions-image" onClick={this.props.onNavigate} to="questions" />
                        <p>Participate in the survey by answering the questions</p>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Home;
