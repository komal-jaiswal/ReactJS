import React,{Component} from 'react'

class EventBinding extends Component{
    constructor(){
        super()
        this.state={
            message:"click button & message will chnage"
        }
        this.changeMessage=this.changeMessage.bind(this)
    }
    
    changeMessage() {
       this.setState({
           message:"welcome to the world of react"
       })
       console.log(this)
   } 
   changeMessageArrow=()=>{
this.setState({
    message:"usingsetstate inside arrow function"
})
   }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* first approach for binding is using bind method */}
                <button onClick={this.changeMessage.bind(this)}>Event Binding using bind</button>
                {/* second approach is using arrow function */}
                <button onClick={()=>this.changeMessage()}>Event Binding using arrow</button>
                {/* third approach is bind in constructor */}
                <button onClick={this.changeMessage}>Event Binding in constructor</button>
                {/* forth approach is write setstate in method itself */}
                <button onClick={this.changeMessageArrow}>Event Binding</button>
            </div>
        )
    }
}

export default EventBinding