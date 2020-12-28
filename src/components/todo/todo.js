import React, { Component } from 'react'
import Input from "../input/input"
import Button from "../button/button"
import TodoItem from "../Todo-item/todoItem"
class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: {}
        };
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem(e) {
        e.preventDefault();
        const todoList = this.state.todoList
        const itemValue = document.querySelector(".todo-input").value;
        todoList[Object.keys(todoList).length + 1] = itemValue
        this.setState({
            todoList: todoList
        })
    }



    render() {
        console.log(this.state.todoList);
        let list = [];
        for (const key in this.state.todoList) {
            list.push(<TodoItem className={key} id={key}>{this.state.todoList[key]}</TodoItem>)
        }
        return <div className="todo">
            <h1>TODO APP</h1>
            <form action="">
                <Input className="todo-input" placeholder="TODO APP ..." />
                <Button handleOnclick={this.addTodoItem}>Add</Button>
            </form>

            <div className="todo-list">
                {list}
            </div>
        </div>
    }
}
export default TODO;
