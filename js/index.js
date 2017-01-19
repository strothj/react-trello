require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');
var List = require('./components/list');

var list = [];
for (var i = 0; i < 3; i++) list.push(<List title={'List #' + (i + 1)}/>);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Things to get done." list={list} />, document.getElementById('app'));
});
