var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            addInputText: '',
            cards: []
        };
    },

    onAddInputChanged: function(event) {
        this.setState({
            addInputText: event.target.value
        });
    },

    onAddSubmit: function(event) {
        event.preventDefault();
        var newCards = this.state.cards.slice();
        newCards.push(<Card text={this.state.addInputText} />);
        this.setState({
            cards: newCards
        });
    },

    render: function() {
        return (
            <List
                title={this.props.title}
                cards={this.state.cards}
                onAddInputChanged={this.onAddInputChanged} 
                onAddSubmit={this.onAddSubmit} />
        );
    },
});

module.exports = ListContainer;
