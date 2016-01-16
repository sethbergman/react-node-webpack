"use strict";

var React = require("react");
var AgeGroupEnum = require("../../../shared/enums").AgeGroupEnum;

var Results = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    formatPercentage: function(dividend, divisor) {
        return (dividend / divisor) + "%";
    },

    render: function() {
        var props = this.props;

        // Group the data by AgeGroup and Sum the result for each Device
        var aggregatedData = props.data.reduce(function(result, item) {
            var ageGroup = item.userInfo.ageGroup;
            if (ageGroup in result) {
                result[ageGroup].userInfo.participants++;
                result[ageGroup].device.computer += item.device.computer;
                result[ageGroup].device.laptop += item.device.laptop;
                result[ageGroup].device.phone += item.device.phone;
                result[ageGroup].device.tablet += item.device.tablet;
                result[ageGroup].device.television += item.device.television;
                result[ageGroup].device.console += item.device.console;
            } else {
                var clone = JSON.parse(JSON.stringify(item));
                result.data.push(result[ageGroup] = clone);
            }
            return result;
        }, { data: [] });

        // Map the aggregated data to Table Rows
        var rows = aggregatedData.data.map(function(item, index) {
            return (
                <tr key={index}>
                    <th className="title-display">{AgeGroupEnum.properties[item.userInfo.ageGroup].description}</th>
                    <td className="small-display">{this.formatPercentage(item.device.computer + item.device.laptop, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.computer, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.laptop, item.userInfo.participants)}</td>
                    <td className="small-display">{this.formatPercentage(item.device.phone + item.device.tablet, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.phone, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.tablet, item.userInfo.participants)}</td>
                    <td className="small-display">{this.formatPercentage(item.device.television + item.device.console, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.television, item.userInfo.participants)}</td>
                    <td className="large-display">{this.formatPercentage(item.device.console, item.userInfo.participants)}</td>
                </tr>
            );
        }, this);

        return (
            <section className="results">
                <h3>
                    Types of device used to access the internet (by age group)
                </h3>
                <table>
                    <thead>
                        <tr>
                            <th className="title-display">Age Group</th>
                            <th className="small-display">Desktop</th>
                            <th className="large-display">Computer</th>
                            <th className="large-display">Laptop</th>
                            <th className="small-display">Mobile</th>
                            <th className="large-display">Phone</th>
                            <th className="large-display">Tablet</th>
                            <th className="small-display">Other</th>
                            <th className="large-display">Television</th>
                            <th className="large-display">Console</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                <p>
                    Devices used to access the internet range from Smart Phones, Tablets, Computers & Laptops. Television and Gaming Consoles are also listed as device categories for internet access.
                </p>
            </section>
        );
    }
});

module.exports = Results;
