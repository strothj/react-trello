require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');
var List = require('./components/list');

function addInputChangeHandler(event) {
    console.log(event.target.value);
}

function addInputSubmitHandler(event) {
    console.log(event.target);
}

var lists = [];
for (var i = 0; i < 3; i++) {
    var newList = <List
        title={'List #' + (i + 1)} 
        onAddInputChanged={addInputChangeHandler} 
        onAddSubmit={addInputSubmitHandler} />;
    lists.push(newList);
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Things to get done." lists={lists} />, document.getElementById('app'));
});
