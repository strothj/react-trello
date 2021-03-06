var React = require('react');
var ReactDOM = require('react-dom');
var ListContainer = require('./list-container');

var Board = function(props) {
    var lists = props.lists || [];

    return (
        <div className="board">
            <h1>{props.title}</h1>
            {lists}
        </div>
    );
};

module.exports = Board;
