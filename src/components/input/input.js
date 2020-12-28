import React, { Component } from 'react'

class Input extends Component {
    render() {
        const { id, name, value, placeholder, className, type } = this.props
        return <>
        <input type={type} placeholder={placeholder} className={className} id={id}></input>
        </>
    }
}

export default Input;