var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function() {
    var cards = [];
    for (var i = 0; i < 3; i ++) cards.push(<Card />);
    return (
        <div className="list">
            {cards}
        </div>
    );
};

module.exports = List;
