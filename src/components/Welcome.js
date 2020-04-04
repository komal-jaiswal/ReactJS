import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        return <h2>rendering using class component
            {this.props.name}Hero is{this.props.heroName}
        </h2>
    }
}

export default Welcome