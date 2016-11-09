var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./Componets/Search.js')

ReactDOM.render(
	<div>
		<div className="jumbotron">
			<h1>New York Times Article Scrubber</h1>
			<p>It's over isn't...</p>
			
		</div>
		<Search />
	</div>,
	document.getElementById('app'))