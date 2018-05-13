var React = require('react');
var createReactClass = require('create-react-class');

require('./css/cardText.css');

const toggleShow = [
    "Show more",
    "Show less"
];
const shortTextLength = 50;

function shortify(text){
    if (text.length > shortTextLength)
    {
        return text.slice(0, shortTextLength);
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
            fullText: this.props.text
        }
    }, //getInitialState

    componentWillMount: function(){
        var shortText = shortify(this.state.fullText);
        this.setState({
            shortText: shortText
        });
    }, //componentWillMount

    render: function(){
        return(
            <span>
                <p>
                    <span className="card-text-hidden" ref="cardTextFull">{this.state.fullText} </span>
                    <span ref="cardTextShort">{this.state.shortText} </span>
                    <span className="text-toggle" onClick={this.onTextToggle}> {this.state.toggleShow} </span>
                </p>
            </span>
        );
    },

    //Custom functions
    onTextToggle: function(){
        var fullText = this.refs.cardTextFull;
        var shortText = this.refs.cardTextShort;
        var newState = toggle(this.state.toggleShow);
        fullText.classList.toggle("card-text-hidden");
        shortText.classList.toggle("card-text-hidden");
        this.setState({
            toggleShow: newState
        });
    }
});

module.exports = CardImage;