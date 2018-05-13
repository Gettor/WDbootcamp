var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./css/index.css');

//Module 
var InsertionDetails = require('./insertionDetails');
var CardImage = require('./cardImage');
var CardText = require('./cardText');

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getShortYear(year){
    var shortYear = year.toString();
    return shortYear.slice(2, 4);
}

var SocialComponent = createReactClass({
    getInitialState: function(){
        return {
            iconPath: "/app/images/icon.png",
            curDate: new Date(),
            name: "Gettorino Superino",
            imagePath: "/app/images/superman.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet ipsum elit, id finibus sem sollicitudin sit amet. Mauris semper, massa vitae vehicula tincidunt, tellus justo feugiat elit, blandit egestas quam nisi sollicitudin felis. Phasellus mollis ipsum urna"
        }
    }, //getInitialState

    render: function(){
        var d = this.state.curDate;
        var dateFormat = addZero(d.getDate()) + "." + addZero(d.getMonth()+1) + "." + getShortYear(d.getFullYear()) + " " + addZero(d.getHours()) + ":" + addZero(d.getMinutes());
        return(
            <div className="social-card">
                <InsertionDetails iconPath={this.state.iconPath} customDate={dateFormat} name={this.state.name}/>
                <CardImage imagePath={this.state.imagePath}/>
                <CardText text={this.state.text}/>
            </div>
            );
    }, // render

});

ReactDOM.render(<SocialComponent />, document.querySelector('#social-wrapper'));