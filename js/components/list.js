var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
    return (
        <div className="list">
            <form onSubmit={props.onAddSubmit}>
                <span className="list__title">{props.title}</span>
                <div className="list__cards">
                    {props.cards}
                </div>

                <div className="list__input-section">
                    <input
                        type="text"
                        onChange={props.onAddInputChanged} />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

module.exports = List;
