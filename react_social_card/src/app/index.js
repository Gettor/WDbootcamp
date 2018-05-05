var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var SocialComponent = createReactClass({
	render: function(){
		return(
				<h1>It works, for now!</h1>
			);
	}, // render
});

ReactDOM.render(<SocialComponent />, document.querySelector('#social-wrapper'));