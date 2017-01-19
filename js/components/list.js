var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

// var List = function(props) {
var List = React.createClass({
    onAddSubmit(event) {
        event.preventDefault();
        if (this.props.onAddSubmit) this.props.onAddSubmit(event);
    },
    
    render: function() {
        var cards = this.props.cards || [];

        for (var i = 0; i < 3; i ++) cards.push(<Card text={'Item #' + (i + 1)} />);
        return (
            <div className="list">
                <form onSubmit={this.onAddSubmit}>
                    <span className="list__title">{this.props.title}</span>
                    <div className="list__cards">
                        {cards}
                    </div>
                    <input
                        type="text"
                        onChange={this.props.onAddInputChanged} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = List;
