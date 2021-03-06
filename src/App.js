import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import UserList from './components/UserList';
import Stylesheet from './components/Stylesheet';
import './AppStyles.css';
import styles from './AppStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecysyleA'
import Fragment from './components/Fragment'
import Table from './components/Table';
import ParentCompo from './components/ParentCompo'
import RefDemo from './components/RefDemo';
import API  from './components/APICallinginReact'
var style={
  backgroundColor: 'purple'
}
const title=React.createElement(
  "h1",
  {id:'title',className:'header'},
  'hello world'
)
const Books=[
  {title:"The sun also rises", author:"Ernest Hemingeay", pages:260},
  {title:"White Teeth", author:"Zadie Smith", pages:50},
  {title:"Cat's Cardle" ,author:"Kurt Vagehutt", pages:89}
]
const person = [
  {
      id: 1,
      name: 'Bruce',
      age: 28,
      skill: 'Angular'
  },
  {
      id: 2,
      name: 'Clark',
      age: 28,
      skill: 'ReactJS'
  },
  {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Springboot'
  },
  {
      id: 4,
      name: 'John',
      age: 25,
      skill: 'Elasticsearch'
  }
]
class App extends Component{
  render(){
    return (
      <div className="App">
        <RefDemo></RefDemo>
        <API person={person} book={Books}></API>
        {/*<ParentCompo></ParentCompo>
         <Table></Table>
        <Fragment></Fragment> */}
        {/* <LifecycleA></LifecycleA>
        <Form></Form> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Stylesheet primary={true}></Stylesheet> */}
        {/*<UserList></UserList>
        <UserGreeting></UserGreeting>
       <ParentComponent></ParentComponent>
         <FunctionClick></FunctionClick> 
         <Message></Message>
        <Counter></Counter>
        <ClassClick></ClassClick>
        <EventBinding></EventBinding>
        <Greet name="Bruce" heroName="Batman">
          <p>this is children</p>
        </Greet>
        <Welcome name="Clcrk" heroName="Superman"></Welcome> 
        {/*<Greet name="Clcrk" heroName="Superman">
          <button>button</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder womon"></Greet>
        <Welcome name="Bruce" heroName="Batman">
          </Welcome> 
          
          <Welcome  name="Diana" heroName="Wonder womon"></Welcome>
        <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
