var React = require('react');
var createReactClass = require('create-react-class');

require('./css/cardImage.css');

const toggleShow = [
	"Show more",
	"Show less"
];

function toggle(currentState){
	if (currentState == toggleShow[0])
	{
		return toggleShow[1];
	}
	return toggleShow[0];
}

var CardImage = createReactClass({
	getInitialState: function(){
        return {
            toggleShow: toggleShow[0]
        }
    }, //getInitialState

	render: function(){
		return(
			<span>
				<p>{this.props.text} <span className="text-toggle" onClick={this.onTextToggle}> {this.state.toggleShow} </span></p>
			</span>
		);
	},

    //Custom functions
    onTextToggle: function(){
        this.props.onTextToggle(this.props.text);
        var newState = toggle(this.state.toggleShow);
        this.setState({
			toggleShow: newState
		});
    }
});

module.exports = CardImage;