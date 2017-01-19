var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

module.exports = Card;
