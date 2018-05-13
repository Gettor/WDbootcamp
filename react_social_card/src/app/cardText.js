var React = require('react');
var createReactClass = require('create-react-class');

require('./css/cardText.css');

const toggleShow = [
    "Show more",
    "Show less"
];
const shortTextLength = 50;

function getShortText(text){
    if (text.length > shortTextLength)
    {
        return text.slice(0, shortTextLength);
    }
    return text;
}

function getRestOfText(text){
	if (text.length > shortTextLength)
    {
        return text.slice(shortTextLength, text.length);
    }
    return text;
}

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
            toggleShow: toggleShow[0],
            shortText: "",
            textAddition: "",
            fullText: this.props.text
        }
    }, //getInitialState

    componentWillMount: function(){
        var shortText = getShortText(this.state.fullText);
        var restOfText = getRestOfText(this.state.fullText);
        this.setState({
            shortText: shortText,
            textAddition: restOfText
        });
    }, //componentWillMount

    render: function(){
        return(
            <span>
                <p>
                	<span id="shortText" className="card-text-start">{this.state.shortText} </span>
                    <span id="fullText" className="card-text-hidden">{this.state.textAddition} </span>
                    <br/>
                    <span className="text-toggle" onClick={this.onTextToggle}> {this.state.toggleShow} </span>
                </p>
            </span>
        );
    },

    //Custom functions
    onTextToggle: function(){
        var newState = toggle(this.state.toggleShow);
        $("#fullText").fadeToggle("fast");
        this.setState({
            toggleShow: newState
        });
    }
});

module.exports = CardImage;