var React = require('react');
var createReactClass = require('create-react-class');

require('./css/cardImage.css');

var CardImage = createReactClass({
	render: function(){
		return(
			<span>
				<img className="center-image" src={this.props.imagePath} />
			</span>
		);
	}
});

module.exports = CardImage;