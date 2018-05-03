var React = require('react');
var createReactClass = require('create-react-class');

//CSS requires
require('./css/addItem.css');

//Create AddItem component
var AddItem = createReactClass({
    render: function(){
        return(
            <span>
                <input type="text" name="input" onKeyPress={this.handleAdd} placeholder="Enter new todo" ref="addItemInputRef" />
            </span>
        );
    },//

    //Custom functions
    handleAdd: function(e){
        console.log(this);
        if (e.which === 13)
        {
            var object = this.refs.addItemInputRef;
            this.props.onAdd(object.value);
            object.value = "";
        }
    }
});

module.exports = AddItem;
