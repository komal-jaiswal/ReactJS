import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'komal'
        }
        console.log("LifecycleB constructor initialized")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }
    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(preprops, prevstate, snapshot) {
        console.log("LifecycleB componentDidUpdate")
    }
    render() {
        console.log("LifecycleB render")
        return <div>LifecycleB</div>
    }

}

export default LifecycleB