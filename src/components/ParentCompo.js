import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent'
import PureCompo from './PureCompo'
import MemoComponent from './MemoComponent'

class ParentCompo extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'Komal'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Komal'
            })
        },2000)
    }
    render() {
        console.log("*****************************************parent component**************************")
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name}></MemoComponent>
                {/* <PureCompo name={this.state.name}></PureCompo>
                <RegComponent name={this.state.name}></RegComponent> */}
            </div>
        )
    }
}

export default ParentCompo