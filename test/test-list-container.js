var React = require('react');
var TestUtils = require('react-addons-test-utils');

var should = require('chai').should();

var ListContainer = require('../js/components/list-container');

describe('ListContainer component', function() {
    it('Renders List with callbacks set', function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={'TestTitle'} />);

        var listContainer = renderer.getRenderOutput();
        listContainer.props.title.should.equal('TestTitle');
        listContainer.props.onAddInputChanged.should.exist;
        listContainer.props.onAddSubmit.should.exist;

        listContainer.props.cards.length.should.equal(0);
    });
});
