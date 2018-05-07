var React = require('react');
var createReactClass = require('create-react-class');

require('./css/insertionDetails.css');

var InsertionDetails = createReactClass({
	render: function(){
		return(
			<div>
				<img className="icon-image" src="/app/images/icon.png" />
				<span>
					<p>Name Surname</p>
					<p>21:39 02.06</p>
				</span>
			</div>
		);
	}
});

module.exports = InsertionDetails;