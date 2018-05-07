var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./css/index.css');

//Module requires
var InsertionDetails = require('./insertionDetails');
var CardImage = require('./cardImage');
var CardText = require('./cardText');


var SocialComponent = createReactClass({
	render: function(){
		return(
				<div className="social-card">
					<InsertionDetails />
					<CardImage />
					<CardText />
				</div>
			);
	}, // render
});

ReactDOM.render(<SocialComponent />, document.querySelector('#social-wrapper'));