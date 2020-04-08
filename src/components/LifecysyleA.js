import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'komal'
        }
        console.log("LifecycleA constructor initialized")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }
    changeHandler=()=>{
        this.setState({
            name:"Codevolution"
        })
    }
    render() {
        console.log("LifecycleA render")
        return (
            <div>LifecycleA
                <button onClick={this.changeHandler}>change state</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(preprops, prevstate, snapshot) {
        console.log("LifecycleA componentDidUpdate")
    }

}

export default LifecycleA