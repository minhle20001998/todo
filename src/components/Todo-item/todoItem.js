import React, { Component } from 'react'
import Input from '../input/input'
import todoItemStyle from "./todoItem.css"
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
        this.handleLabelClick = this.handleLabelClick.bind(this);
    }
    handleLabelClick() {
        console.log(this.state.toogle);
        const { toogle } = this.state
        this.setState({
            toogle: !toogle,
        })
    }
    render() {
        console.log("render todoitem");
        const { className, id } = this.props;
        if (this.props.children) {
            return <div className={this.state.toggle ? " line" : "a  "}>
                <Input className="todo-item" type="checkbox" id={id} />
                <label htmlFor={id} onClick={this.handleLabelClick}>{this.props.children}</label>
            </div>
        } else {
            return null
        }
    }
}
export default TodoItem;
