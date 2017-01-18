var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var Board = function() {
    var lists = [];
    for (var i = 0; i < 3; i++) lists.push(<List />);
    return (
        <div className="board">
            {lists}
        </div>
    );
};

module.exports = Board;
