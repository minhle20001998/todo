import React, { Component } from 'react'
import Input from '../input/input'
import todoItemStyle from "./todoItem.css"
class TodoItem extends Component {
    render() {
        const { className, id } = this.props;
        return <div className={className}>
            <Input className="todo-item" type="checkbox" id={id} />
            <label for={id}>{this.props.children}</label>
        </div>

    }
}
export default TodoItem;
