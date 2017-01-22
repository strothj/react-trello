var React = require('react');
var TestUtils = require('react-addons-test-utils');

var should = require('chai').should();

var List = require('../js/components/list');

describe('List component', function() {
    it('Renders title and cards', function() {
        var addSubmitHandler = function() {};
        var addInputChangedHandler = function() {};
        var cards = <span>TestCard</span>;

        var renderer = TestUtils.createRenderer();
        renderer.render(<List
            onAddSubmit={addSubmitHandler}
            onAddInputChanged={addInputChangedHandler}
            title={'TestTitle'} 
            cards={cards} />);
        
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('list');

        var form = result.props.children;
        form.type.should.equal('form');
        form.props.onSubmit.should.equal(addSubmitHandler);

        var title = form.props.children[0];
        title.props.children.should.equal('TestTitle');

        var cards = form.props.children[1];
        cards.props.children.props.children.should.equal('TestCard');

        var input = form.props.children[2].props.children[0];
        input.props.onChange.should.equal(addInputChangedHandler);
    });
});