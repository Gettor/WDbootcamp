var React = require('react');
var createReactClass = require('create-react-class');

require('./css/cardImage.css');

var CardImage = createReactClass({
	render: function(){
		return(
			<span>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet ipsum elit, id finibus sem sollicitudin sit amet. Mauris semper, massa vitae vehicula tincidunt, tellus justo feugiat elit, blandit egestas quam nisi sollicitudin felis. Phasellus mollis ipsum urna, et interdum nulla varius vitae. Donec luctus, eros nec facilisis finibus, tellus enim commodo risus, sed placerat ligula ipsum id ex. In elementum quam sem. Donec vestibulum dapibus justo, vitae cursus est dictum quis. Fusce a erat eget ex feugiat tristique eu sed diam. Curabitur non tincidunt sem. Maecenas a sem lobortis, fringilla ligula sed, tempor ante.

				Nulla eleifend mi id tristique aliquam. Sed venenatis euismod congue. Sed ac pulvinar orci, vitae pellentesque leo. Maecenas pellentesque massa vitae metus gravida molestie. Nullam ac orci nulla. Quisque convallis luctus nisi, eget varius felis lacinia et. Nunc in neque quis erat tristique vehicula a ultricies purus.</p>
			</span>
		);
	}
});

module.exports = CardImage;