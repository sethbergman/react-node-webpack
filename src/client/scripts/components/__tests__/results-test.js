jest.dontMock('../results.jsx');

describe('Results', function() {
    it('contains table in section', function() {
        var React = require('react/addons');
        var Results = require('../results.jsx');
        var TestUtils = React.addons.TestUtils;
        var data = require("../../../../models/data.js");

        var component = TestUtils.renderIntoDocument(
            <Results data={data.values} />
        );

        var tableSection = TestUtils.findRenderedDOMComponentWithClass(component, 'table-wrapper');
        expect(tableSection.props.children.type).toEqual('table');
    });
});
