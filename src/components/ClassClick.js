import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("Button clicked from class handler")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click Button</button>
            </div>
        )
    }
}

export default ClassClick