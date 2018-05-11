var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./css/index.css');

//Module 
var InsertionDetails = require('./insertionDetails');
var CardImage = require('./cardImage');
var CardText = require('./cardText');

const shortTextLength = 50;

function getDayFromDate(date){
	if (date < 10)
	{
		return "0" + date;
	}
	return date;
}

function getShortYear(year){
	var shortYear = year.toString();
	return shortYear.slice(2, 4);
}

function shortify(text){
	if (text.length > shortTextLength)
	{
		return text.slice(0, shortTextLength);
	}
	return text;
}

var SocialComponent = createReactClass({
    getInitialState: function(){
        return {
            iconPath: "/app/images/icon.png",
            curDate: new Date(),
            name: "Gettorino Superino",
            imagePath: "/app/images/superman.png",
            displayText: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet ipsum elit, id finibus sem sollicitudin sit amet. Mauris semper, massa vitae vehicula tincidunt, tellus justo feugiat elit, blandit egestas quam nisi sollicitudin felis. Phasellus mollis ipsum urna"
        }
    }, //getInitialState

    componentWillMount: function(){
    	var shortText = shortify(this.state.text);
		this.setState({
			displayText: shortText
		});
    }, //componentWillMount

	render: function(){
		var d = this.state.curDate;
		var dateFormat = getDayFromDate(d.getDate()) + "." + getDayFromDate(d.getMonth()) + "." + getShortYear(d.getFullYear()) + " " + d.getHours() + ":" + d.getMinutes();
		return(
			<div className="social-card">
				<InsertionDetails iconPath={this.state.iconPath} customDate={dateFormat} name={this.state.name}/>
				<CardImage imagePath={this.state.imagePath}/>
				<CardText text={this.state.displayText} onTextToggle={this.onTextToggle}/>
			</div>
			);
	}, // render

	//Custom functions
    onTextToggle: function(item){
        var newText = this.state.text;
        if (item == newText)
        {
        	newText = shortify(newText);
        }
    	this.setState({
    		displayText: newText
    	});
    }
});

ReactDOM.render(<SocialComponent />, document.querySelector('#social-wrapper'));