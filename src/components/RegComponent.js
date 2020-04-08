import React, { Component } from 'react'

class RegComponent extends Component {

    clickHandler() {
        console.log("Button clicked from class handler")
    }

    render() {
        console.log("regular component render")
        return (
            <div>
               regular component {this.props.name}
            </div>
        )
    }
}

export default RegComponent