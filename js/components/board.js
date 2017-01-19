var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var Board = function(props) {
    var list = props.list || [];

    return (
        <div className="board">
            <h1>{props.title}</h1>
            {list}
        </div>
    );
};

module.exports = Board;
