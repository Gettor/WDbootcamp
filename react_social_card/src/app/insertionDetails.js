var React = require('react');
var createReactClass = require('create-react-class');

require('./css/insertionDetails.css');

var InsertionDetails = createReactClass({
	render: function(){
		return(
			<div>
				<img className="icon-image" src={this.props.iconPath} />
				<span className="insertion-name">
					<p>{this.props.name}</p>
					<p>{this.props.customDate}</p>
				</span>
			</div>
		);
	}
});

module.exports = InsertionDetails;