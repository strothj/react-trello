require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');
var ListContainer = require('./components/list-container');

const listContainers = [];
for (var i = 0; i < 3; i += 1) {
    listContainers.push(<ListContainer key={i} title={'List #' + (i + 1)} />);
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Things to get done." lists={listContainers} />, document.getElementById('app'));
});
