var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

//CSS requires
require('./css/index.css');

//Create a component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <AddItem onAdd={this.onAdd} />
                <ul>{todos}</ul>
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);

        this.setState({
          todos: updatedTodos
        });
    }
});

ReactDOM.render(<TodoComponent />, document.querySelector('#todo-wrapper'));
