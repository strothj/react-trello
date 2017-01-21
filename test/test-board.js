var React = require('react');
var TestUtils = require('react-addons-test-utils');

var should = require('chai').should();

var Board = require('../js/components/board');
var ListContainer = require('../js/components/list-container');

describe('Board component', function() {
    it('Renders list containers', function() {
        const listContainers = [<ListContainer />, <ListContainer />];
        
        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title="TestTitle" lists={listContainers} />);
        const result = renderer.getRenderOutput();

        result.props.className.should.equal('board');
        result.props.children.length.should.equal(2);

        const h1 = result.props.children[0];
        h1.type.should.equal('h1');
        h1.props.children.should.equal('TestTitle');
        
        const lists = result.props.children[1];
        lists.should.be.a('array');
        lists.length.should.equal(2);
    });
});