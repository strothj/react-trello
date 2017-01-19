var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
    var cards = props.cards || [];

    for (var i = 0; i < 3; i ++) cards.push(<Card text={'Item #' + (i + 1)} />);
    return (
        <div className="list">
            <h4>{props.title}</h4>
            {cards}
        </div>
    );
};

module.exports = List;
