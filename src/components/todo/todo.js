import React, { Component } from 'react'
import Input from "../input/input"
import Button from "../button/button"
import TodoItem from "../Todo-item/todoItem"
class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem() {
        const itemValue = document.querySelector(".todo-input").value;
        this.setState({
            todoList: this.state.todoList.push(itemValue)
        })
    }



    render() {
        return <todo>
            <h1>TODO APP</h1>
            <Input className="todo-input" placeholder="TODO APP ..." />
            <Button handleOnlick={this.addTodoItem}>Add</Button>
            <div className="todo-list">
                <TodoItem id="1">adu vjp</TodoItem>
            </div>
        </todo>
    }
}
export default TODO;
