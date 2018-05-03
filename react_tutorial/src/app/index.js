var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');

var App = createReactClass({
    render: function(){
        return(
            <Router>
                <div>
                    <Route exact path={'/'} component={TodoComponent}></Route>
                    <Route exact path={'/about'} component={About}></Route>
                </div>
            </Router>
        );
    }, //render
});

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

ReactDOM.render(<App />, document.querySelector('#todo-wrapper'));
