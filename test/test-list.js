var React = require('react');
var TestUtils = require('react-addons-test-utils');

var should = require('chai').should();

var List = require('../js/components/list');

describe('List component', function() {
    it('Renders title and cards', function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<List onAddSubmit={function(){}} />);

        var result = renderer.getRenderOutput();
        
    });
});