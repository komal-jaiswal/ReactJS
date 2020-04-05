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
    clickHandler(childName) {
        alert(`Hello ${this.state.greet} from ${childName}`)
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