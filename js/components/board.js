var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

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
