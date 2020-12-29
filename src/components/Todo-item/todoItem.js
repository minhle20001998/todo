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


    handleLabelClick(e) {
        const { toggle } = this.state;
        this.props.onClick(e);
        this.setState({
            toggle: !toggle
        });
    }

    render() {
        console.log("render todoitem");
        const { className, id } = this.props;

        return (
            <>
                {
                    this.props.children ? (<div className={this.state.toggle ? className + " item line" : className + " item"}>
                        <Input className="todo-item" type="checkbox" id={id} />
                        <label htmlFor={id} id={id} onClick={this.handleLabelClick}>{this.props.children}</label>
                    </div>) : (null)
                }
            </>
        )

        // if (this.props.children) {
        //     console.log("hien item")
        //     return <div className={this.state.toggle ? " line" : "a  "}>
        //         <Input className="todo-item" type="checkbox" id={id} />
        //         <label htmlFor={id} onClick={this.handleLabelClick}>{this.props.children}</label>
        //     </div>
        // } else {
        //     return null
        // }
    }
}
export default TodoItem;
