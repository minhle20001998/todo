import React, { Component } from 'react'
import Input from "../input/input"
import Button from "../button/button"
import TodoItem from "../Todo-item/todoItem"
class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: {},
            selectedTodoList: []
        };
        this.addTodoItem = this.addTodoItem.bind(this);
        this.addSelectedItem = this.addSelectedItem.bind(this);
    }

    addTodoItem(e) {
        e.preventDefault();
        const todoList = this.state.todoList
        const itemValue = document.querySelector(".todo-input").value;
        const key = Object.keys(todoList).length + 1;
        todoList[key] = <TodoItem className={key} key={key} id={key} onClick={this.addSelectedItem}>{itemValue}</TodoItem>;
        this.setState({
            todoList: todoList
        });
    }

    addSelectedItem(e) {
        const currentID = e.currentTarget.id;
        const { selectedTodoList } = this.state
        const newList = [...selectedTodoList];

        if (!selectedTodoList.includes(currentID)) {
            newList.push(currentID);

            this.setState({
                selectedTodoList: newList
            });
        } else {
            for (let i = 0; i < selectedTodoList.length; i++) {
                if (selectedTodoList[i] == currentID) {
                    newList.splice(i, 1);
                }
            }
            this.setState({
                selectedTodoList: newList
            })
        }
    }


    render() {
        const list = []
        for (const key in this.state.todoList) {
            list.push(this.state.todoList[key])
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
