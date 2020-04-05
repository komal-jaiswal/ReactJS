import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greet: "hello parent"
        }
       this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler() {
        alert(this.state.greet)
    }

    render() {
        return (
            <div>
               <ChildComponent handler={this.clickHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent